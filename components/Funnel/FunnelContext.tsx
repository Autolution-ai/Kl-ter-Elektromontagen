"use client";

import {
  createContext,
  useContext,
  useReducer,
  useCallback,
  type ReactNode,
} from "react";
import type { FunnelTrack, SegmentId } from "@/lib/content";
import { segments } from "@/lib/content";
import { questionsByTrack } from "./funnelConfig";

type AnswerValue = string | string[];

interface FunnelState {
  track: FunnelTrack | null;
  segment: SegmentId | null;
  answers: Record<string, AnswerValue>;
  stepIndex: number; // 0 = Bereichswahl, danach Fragen des Tracks, dann Kontakt
  status: "idle" | "active" | "done";
}

type Action =
  | { type: "SELECT_SEGMENT"; segment: SegmentId }
  | { type: "SET_TRACK"; track: FunnelTrack; segment: SegmentId }
  | { type: "SET_ANSWER"; id: string; value: AnswerValue }
  | { type: "NEXT" }
  | { type: "BACK" }
  | { type: "SUBMIT" }
  | { type: "RESET" };

function makeInitial(initialSegment?: SegmentId | null): FunnelState {
  const seg = initialSegment
    ? segments.find((s) => s.id === initialSegment)
    : undefined;
  if (seg) {
    return {
      track: seg.track,
      segment: seg.id,
      answers: { bereich: seg.label },
      stepIndex: 1,
      status: "active",
    };
  }
  return {
    track: null,
    segment: null,
    answers: {},
    stepIndex: 0,
    status: "idle",
  };
}

function reducer(state: FunnelState, action: Action): FunnelState {
  switch (action.type) {
    case "SELECT_SEGMENT": {
      const seg = segments.find((s) => s.id === action.segment);
      if (!seg) return state;
      return {
        ...state,
        segment: seg.id,
        track: seg.track,
        answers: { ...state.answers, bereich: seg.label },
        stepIndex: 1,
        status: "active",
      };
    }
    case "SET_TRACK": {
      const seg = segments.find((s) => s.id === action.segment);
      return {
        ...state,
        track: action.track,
        segment: action.segment,
        answers: { ...state.answers, bereich: seg?.label ?? "" },
        stepIndex: 1,
        status: "active",
      };
    }
    case "SET_ANSWER":
      return {
        ...state,
        answers: { ...state.answers, [action.id]: action.value },
      };
    case "NEXT": {
      const total = state.track ? questionsByTrack[state.track].length + 1 : 1;
      return { ...state, stepIndex: Math.min(state.stepIndex + 1, total) };
    }
    case "BACK":
      return { ...state, stepIndex: Math.max(state.stepIndex - 1, 0) };
    case "SUBMIT":
      return { ...state, status: "done" };
    case "RESET":
      return makeInitial(null);
    default:
      return state;
  }
}

interface FunnelContextValue extends FunnelState {
  dispatch: React.Dispatch<Action>;
  selectSegment: (segment: SegmentId) => void;
  totalSteps: number;
}

const FunnelContext = createContext<FunnelContextValue | null>(null);

export function FunnelProvider({
  children,
  initialSegment = null,
}: {
  children: ReactNode;
  initialSegment?: SegmentId | null;
}) {
  const [state, dispatch] = useReducer(
    reducer,
    initialSegment,
    makeInitial
  );

  const selectSegment = useCallback((segment: SegmentId) => {
    dispatch({ type: "SELECT_SEGMENT", segment });
  }, []);

  const totalSteps = state.track
    ? questionsByTrack[state.track].length + 2
    : 1;

  return (
    <FunnelContext.Provider
      value={{ ...state, dispatch, selectSegment, totalSteps }}
    >
      {children}
    </FunnelContext.Provider>
  );
}

export function useFunnel() {
  const ctx = useContext(FunnelContext);
  if (!ctx) throw new Error("useFunnel muss innerhalb von FunnelProvider stehen");
  return ctx;
}

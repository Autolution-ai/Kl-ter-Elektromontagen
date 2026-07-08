import Link from "next/link";
import { forwardRef } from "react";

type ButtonProps = {
  variant?: "signal" | "outline" | "ghost";
  size?: "md" | "lg";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold tracking-tight transition-transform duration-200 will-change-transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline focus-visible:outline-3";

const variants = {
  signal:
    "bg-signal text-ink-950 hover:bg-signal-400 shadow-[0_8px_30px_-8px_rgba(245,179,1,0.6)]",
  outline:
    "border border-ink-500 text-chalk hover:border-signal hover:text-signal bg-transparent",
  ghost: "text-chalk hover:text-signal bg-transparent",
};

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "signal", size = "md", className = "", ...props }, ref) => (
    <button
      ref={ref}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  )
);
Button.displayName = "Button";

export function LinkButton({
  href,
  variant = "signal",
  size = "md",
  className = "",
  children,
}: {
  href: string;
  variant?: "signal" | "outline" | "ghost";
  size?: "md" | "lg";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28 ${className}`}
    >
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-signal">
      <span className="h-px w-6 bg-signal" aria-hidden />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-chalk sm:text-4xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {intro}
        </p>
      ) : null}
    </div>
  );
}

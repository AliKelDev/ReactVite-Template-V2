import type { ButtonHTMLAttributes, CSSProperties, ElementType, HTMLAttributes, ReactNode } from "react";
import { useId, useMemo } from "react";
import { useTheme } from "./theme";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/* ------------------------------------------------------------------ text */

/** Mono caps label. `index` is drawn in the signal colour: <Label index="01">Input</Label> */
export function Label({ index, line, children, className }: { index?: string; line?: boolean; children: ReactNode; className?: string }) {
  return (
    <span className={cx("sg-label", line && "sg-label--line", className)}>
      {index && <b>{index}</b>}
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ panel */

type PanelProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  /** Registration marks just outside the corners. */
  marks?: boolean;
  variant?: "raised" | "flat" | "sunken";
};

export function Panel({ as: Tag = "section", marks, variant = "raised", className, children, ...rest }: PanelProps) {
  return (
    <Tag className={cx("sg-panel", variant === "flat" && "sg-panel--flat", variant === "sunken" && "sg-panel--sunken", className)} {...rest}>
      {marks && (
        <>
          <i className="sg-mark sg-mark--tl" aria-hidden />
          <i className="sg-mark sg-mark--tr" aria-hidden />
          <i className="sg-mark sg-mark--bl" aria-hidden />
          <i className="sg-mark sg-mark--br" aria-hidden />
        </>
      )}
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ button */

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "signal" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
};

export function Button({ variant = "default", size = "md", icon, className, type = "button", ...rest }: ButtonProps) {
  return (
    <button
      type={type}
      className={cx(
        "sg-btn",
        variant === "signal" && "sg-btn--signal",
        variant === "ghost" && "sg-btn--ghost",
        size === "sm" && "sg-btn--sm",
        size === "lg" && "sg-btn--lg",
        icon && "sg-btn--icon",
        className,
      )}
      {...rest}
    />
  );
}

/* ------------------------------------------------------------------ fields */

export function Field({ label, hint, children, htmlFor }: { label: string; hint?: ReactNode; children: ReactNode; htmlFor?: string }) {
  return (
    <div className="sg-field">
      <label className="sg-label" htmlFor={htmlFor}>
        {label}
      </label>
      {children}
      {hint && <span className="sg-field__hint">{hint}</span>}
    </div>
  );
}

/* ------------------------------------------------------------------ indicators */

export function Led({ state = "signal", live, label }: { state?: "signal" | "go" | "warn" | "stop" | "off"; live?: boolean; label?: string }) {
  return (
    <span
      className={cx("sg-led", state !== "signal" && `sg-led--${state}`, live && "is-live")}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    />
  );
}

export function Readout({ value, unit, label }: { value: ReactNode; unit?: string; label?: string }) {
  return (
    <span className="sg-readout">
      {label && <span className="sg-label">{label}</span>}
      <span className="sg-readout__value">
        {value}
        {unit && <span className="sg-readout__unit">{unit}</span>}
      </span>
    </span>
  );
}

export function Tag({ children, signal }: { children: ReactNode; signal?: boolean }) {
  return <span className={cx("sg-tag", signal && "sg-tag--signal")}>{children}</span>;
}

export function Kbd({ children }: { children: ReactNode }) {
  return <kbd className="sg-kbd">{children}</kbd>;
}

export function Rule({ children }: { children?: ReactNode }) {
  return (
    <div className="sg-rule" role="separator">
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ theme switch */

export function ThemeSwitch() {
  const { theme, toggle } = useTheme();
  const night = theme === "night";
  return (
    <button type="button" role="switch" aria-checked={night} className="sg-switch" onClick={toggle}>
      <span>{night ? "Night" : "Paper"}</span>
      <span className="sg-switch__track" aria-hidden>
        <span className="sg-switch__knob" />
      </span>
      <span className="sg-visually-hidden">Dark theme</span>
    </button>
  );
}

/* ------------------------------------------------------------------ scope */

/**
 * An oscilloscope: a phosphor trace scrolling over a graticule, with a slow beam sweep.
 * Purely decorative; it stops moving for people who ask for reduced motion.
 */
export function Scope({ height = 220, style }: { height?: number; style?: CSSProperties }) {
  const id = useId().replace(/:/g, "");
  const width = 600;
  const path = useMemo(() => {
    // Every component has a period that divides 600, so two copies tile seamlessly.
    const mid = height / 2;
    const pts: string[] = [];
    for (let x = 0; x <= width * 2; x += 2) {
      const env = 0.62 + 0.38 * Math.sin((2 * Math.PI * x) / 600);
      const y =
        mid +
        height * 0.2 * env * Math.sin((2 * Math.PI * x) / 150) +
        height * 0.05 * Math.sin((2 * Math.PI * x) / 40 + 1.3);
      pts.push(`${x === 0 ? "M" : "L"}${x} ${y.toFixed(2)}`);
    }
    return pts.join(" ");
  }, [height]);

  const cols = Array.from({ length: 11 }, (_, i) => (i + 1) * (width / 12));
  const rows = Array.from({ length: 5 }, (_, i) => (i + 1) * (height / 6));

  return (
    <svg className="sg-scope" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" role="img" aria-label="Oscilloscope trace" style={style}>
      <defs>
        <linearGradient id={`beam-${id}`} x1="0" x2="1">
          <stop offset="0" stopColor="var(--signal)" stopOpacity="0" />
          <stop offset="0.85" stopColor="var(--signal)" stopOpacity="0.10" />
          <stop offset="1" stopColor="var(--signal)" stopOpacity="0.22" />
        </linearGradient>
        <clipPath id={`clip-${id}`}>
          <rect width={width} height={height} rx="10" />
        </clipPath>
      </defs>
      <g clipPath={`url(#clip-${id})`}>
        <rect width={width} height={height} fill="var(--sunken)" />
        {cols.map((x) => (
          <line key={`c${x}`} x1={x} x2={x} y1="0" y2={height} stroke="var(--line)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        ))}
        {rows.map((y) => (
          <line key={`r${y}`} x1="0" x2={width} y1={y} y2={y} stroke="var(--line)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        ))}
        <line x1="0" x2={width} y1={height / 2} y2={height / 2} stroke="var(--line-2)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <g className="sg-scope__trace">
          <path d={path} fill="none" stroke="var(--signal)" strokeWidth="1.6" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
        </g>
        <rect className="sg-scope__beam" x="0" y="0" width="120" height={height} fill={`url(#beam-${id})`} />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ wordmark */

/** "alikel" in lowercase with the signal dot on the i (a dotless i plus a drawn dot). */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cx("sg-wordmark", className)} aria-label="alikel" role="img">
      <span aria-hidden>al</span>
      <span className="sg-wordmark__i" aria-hidden>
        {"\u0131"}
      </span>
      <span aria-hidden>kel</span>
    </span>
  );
}

/* ------------------------------------------------------------------ orbit */

/**
 * A large, thin, glowing arc crossing the area with an orb drifting slowly along it, after the Alikel channel banner.
 * Place it inside a position: relative container; it fills it and ignores the pointer.
 */
export function Orbit({ className }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  // One big circle whose arc enters at the top left and leaves at the bottom right of a 1200 x 600 box.
  const arc = "M -80 40 A 1100 1100 0 0 0 1280 560";
  const far = "M 860 -40 A 900 900 0 0 0 1300 420";
  return (
    <div className={cx("sg-orbit", className)} aria-hidden>
      <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={`arc-${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--signal)" stopOpacity="0" />
            <stop offset="0.25" stopColor="var(--signal)" stopOpacity="0.9" />
            <stop offset="0.7" stopColor="var(--signal)" stopOpacity="0.55" />
            <stop offset="1" stopColor="var(--signal)" stopOpacity="0" />
          </linearGradient>
          <radialGradient id={`orb-${id}`} cx="0.38" cy="0.35" r="0.65">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="0.35" stopColor="var(--signal)" stopOpacity="0.95" />
            <stop offset="1" stopColor="var(--signal-fill)" stopOpacity="0.9" />
          </radialGradient>
          <filter id={`glow-${id}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>
        <path d={arc} fill="none" stroke="var(--signal)" strokeOpacity="0.35" strokeWidth="10" filter={`url(#glow-${id})`} />
        <path d={arc} fill="none" stroke={`url(#arc-${id})`} strokeWidth="1.4" />
        <path d={far} fill="none" stroke="var(--signal)" strokeOpacity="0.28" strokeWidth="1" />
        <g className="sg-orbit__orb" style={{ offsetPath: `path("${arc}")` }}>
          <circle r="26" fill="var(--signal)" opacity="0.25" filter={`url(#glow-${id})`} />
          <circle r="15" fill={`url(#orb-${id})`} />
        </g>
      </svg>
    </div>
  );
}

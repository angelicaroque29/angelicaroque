/** Reusable SVG decorative components */

/** A large soft gradient bubble */
export function GradientBubble({
  size = 360,
  style,
  colorA = "rgb(132 103 255 / 0.35)",
  colorB = "rgb(197 212 240 / 0.55)",
  colorC = "transparent",
  className = "",
}: {
  size?: number;
  style?: React.CSSProperties;
  colorA?: string;
  colorB?: string;
  colorC?: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 30% 30%, #ffffff 0 6%, ${colorA} 22%, ${colorB} 52%, ${colorC} 72%)`,
        filter: "blur(2px)",
        ...style,
      }}
    />
  );
}

/** Thin curved SVG path */
export function CurvedPath({
  className = "",
  style,
  d,
  stroke = "rgb(91 125 184 / 0.3)",
  strokeWidth = 1.5,
  viewBox = "0 0 400 200",
}: {
  className?: string;
  style?: React.CSSProperties;
  d: string;
  stroke?: string;
  strokeWidth?: number;
  viewBox?: string;
}) {
  return (
    <svg
      aria-hidden
      className={`pointer-events-none absolute ${className}`}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path d={d} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

/** Scattered decorative dots */
export function ScatterDots({
  className = "",
  style,
  dots,
}: {
  className?: string;
  style?: React.CSSProperties;
  dots: { cx: number; cy: number; r: number; fill: string; opacity?: number }[];
}) {
  const maxX = Math.max(...dots.map((d) => d.cx + d.r)) + 4;
  const maxY = Math.max(...dots.map((d) => d.cy + d.r)) + 4;
  return (
    <svg
      aria-hidden
      className={`pointer-events-none absolute ${className}`}
      viewBox={`0 0 ${maxX} ${maxY}`}
      width={maxX}
      height={maxY}
      fill="none"
      style={style}
    >
      {dots.map((dot, i) => (
        <circle
          key={i}
          cx={dot.cx}
          cy={dot.cy}
          r={dot.r}
          fill={dot.fill}
          opacity={dot.opacity ?? 1}
        />
      ))}
    </svg>
  );
}

/** Grid of small dots */
export function DotMatrix({
  cols = 8,
  rows = 6,
  gap = 18,
  r = 1.5,
  fill = "rgb(30 58 95 / 0.1)",
  className = "",
  style,
}: {
  cols?: number;
  rows?: number;
  gap?: number;
  r?: number;
  fill?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const w = (cols - 1) * gap + r * 2 + 2;
  const h = (rows - 1) * gap + r * 2 + 2;
  const points: { cx: number; cy: number }[] = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      points.push({ cx: r + 1 + col * gap, cy: r + 1 + row * gap });
    }
  }
  return (
    <svg
      aria-hidden
      className={`pointer-events-none absolute ${className}`}
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      style={style}
    >
      {points.map((p, i) => (
        <circle key={i} cx={p.cx} cy={p.cy} r={r} fill={fill} />
      ))}
    </svg>
  );
}

/** Connecting dashed line between two points */
export function ConnectLine({
  x1, y1, x2, y2,
  stroke = "rgb(91 125 184 / 0.25)",
  strokeWidth = 1,
  dashed = true,
  width = 200,
  height = 100,
  className = "",
  style,
}: {
  x1: number; y1: number; x2: number; y2: number;
  stroke?: string; strokeWidth?: number; dashed?: boolean;
  width?: number; height?: number;
  className?: string; style?: React.CSSProperties;
}) {
  return (
    <svg
      aria-hidden
      className={`pointer-events-none absolute ${className}`}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      style={style}
    >
      <path
        d={`M ${x1} ${y1} C ${x1} ${(y1 + y2) / 2}, ${x2} ${(y1 + y2) / 2}, ${x2} ${y2}`}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeDasharray={dashed ? "4 4" : undefined}
        strokeLinecap="round"
      />
    </svg>
  );
}

const sketchStroke = "rgb(30 58 95 / 0.22)";
const sketchStrokeLight = "rgb(42 157 143 / 0.35)";

/** Hand-drawn botanical branch */
export function SketchBotanical({
  className = "",
  style,
  flip = false,
}: {
  className?: string;
  style?: React.CSSProperties;
  flip?: boolean;
}) {
  return (
    <svg
      aria-hidden
      className={`pointer-events-none ${className}`}
      width={120}
      height={140}
      viewBox="0 0 120 140"
      fill="none"
      style={{ transform: flip ? "scaleX(-1)" : undefined, ...style }}
    >
      <path
        d="M58 130 C52 108 48 86 54 64 C58 48 68 34 72 18"
        stroke={sketchStroke}
        strokeWidth={1.4}
        strokeLinecap="round"
      />
      <path
        d="M54 92 C38 88 26 78 18 64 M56 72 C72 68 84 56 90 42 M58 48 C44 42 34 30 28 16"
        stroke={sketchStrokeLight}
        strokeWidth={1.2}
        strokeLinecap="round"
      />
      <ellipse cx="22" cy="62" rx="9" ry="5" transform="rotate(-28 22 62)" stroke={sketchStroke} strokeWidth={1.1} />
      <ellipse cx="88" cy="40" rx="8" ry="4.5" transform="rotate(22 88 40)" stroke={sketchStroke} strokeWidth={1.1} />
      <ellipse cx="30" cy="14" rx="7" ry="4" transform="rotate(-12 30 14)" stroke={sketchStrokeLight} strokeWidth={1.1} />
    </svg>
  );
}

/** Small hand-drawn stars */
export function SketchStars({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      aria-hidden
      className={`pointer-events-none ${className}`}
      width={80}
      height={72}
      viewBox="0 0 80 72"
      fill="none"
      style={style}
    >
      <path d="M12 18 L14 24 L20 24 L15 28 L17 34 L12 30 L7 34 L9 28 L4 24 L10 24 Z" stroke={sketchStrokeLight} strokeWidth={1} fill="rgb(42 157 143 / 0.08)" />
      <path d="M58 8 L59.5 12 L64 12 L60.5 14.5 L62 18.5 L58 16 L54 18.5 L55.5 14.5 L52 12 L56.5 12 Z" stroke={sketchStroke} strokeWidth={0.9} fill="none" />
      <path d="M68 48 L69 51 L72 51 L69.5 53 L70.5 56 L68 54 L65.5 56 L66.5 53 L64 51 L67 51 Z" stroke={sketchStrokeLight} strokeWidth={0.8} fill="rgb(42 157 143 / 0.06)" />
      <circle cx="36" cy="58" r="2" fill="rgb(30 58 95 / 0.12)" />
      <circle cx="44" cy="22" r="1.5" fill="rgb(42 157 143 / 0.2)" />
    </svg>
  );
}

/** Elegant loose squiggle */
export function SketchSquiggle({
  className = "",
  style,
  width = 160,
}: {
  className?: string;
  style?: React.CSSProperties;
  width?: number;
}) {
  const height = Math.round(width * 0.35);
  return (
    <svg
      aria-hidden
      className={`pointer-events-none ${className}`}
      width={width}
      height={height}
      viewBox="0 0 160 56"
      fill="none"
      style={style}
    >
      <path
        d="M4 36 C28 12 52 48 76 28 S124 8 156 32"
        stroke={sketchStrokeLight}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path
        d="M20 44 C44 52 68 24 92 40"
        stroke={sketchStroke}
        strokeWidth={1}
        strokeLinecap="round"
        opacity={0.6}
      />
    </svg>
  );
}

/** Abstract workspace line illustration */
export function SketchWorkspace({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      aria-hidden
      className={`pointer-events-none ${className}`}
      width={200}
      height={160}
      viewBox="0 0 200 160"
      fill="none"
      style={style}
    >
      <rect x="24" y="28" width="112" height="76" rx="8" stroke={sketchStroke} strokeWidth={1.4} />
      <path d="M24 48 H136" stroke={sketchStroke} strokeWidth={1} opacity={0.5} />
      <circle cx="36" cy="38" r="3" fill="rgb(42 157 143 / 0.25)" />
      <circle cx="46" cy="38" r="3" fill="rgb(30 58 95 / 0.12)" />
      <circle cx="56" cy="38" r="3" fill="rgb(30 58 95 / 0.12)" />
      <path d="M40 72 H88 M40 84 H72" stroke={sketchStrokeLight} strokeWidth={1.2} strokeLinecap="round" />
      <path d="M148 52 L176 36 V124 L148 108 Z" stroke={sketchStroke} strokeWidth={1.3} strokeLinejoin="round" />
      <path d="M156 64 H168 M156 76 H164 M156 88 H168" stroke={sketchStrokeLight} strokeWidth={1} strokeLinecap="round" />
      <path
        d="M52 132 C72 120 92 136 112 124 C132 112 152 128 172 116"
        stroke={sketchStrokeLight}
        strokeWidth={1.3}
        strokeLinecap="round"
      />
      <circle cx="168" cy="44" r="14" stroke={sketchStrokeLight} strokeWidth={1.2} />
      <path d="M162 44 L166 48 L176 36" stroke="rgb(42 157 143 / 0.5)" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Decorative arch pair */
export function SketchArcs({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      aria-hidden
      className={`pointer-events-none ${className}`}
      width={100}
      height={80}
      viewBox="0 0 100 80"
      fill="none"
      style={style}
    >
      <path d="M10 70 Q50 10 90 70" stroke={sketchStroke} strokeWidth={1.3} strokeLinecap="round" />
      <path d="M22 70 Q50 26 78 70" stroke={sketchStrokeLight} strokeWidth={1.1} strokeLinecap="round" />
    </svg>
  );
}

/** Floating orbit ring sketch */
export function SketchOrbit({
  className = "",
  style,
  size = 88,
}: {
  className?: string;
  style?: React.CSSProperties;
  size?: number;
}) {
  return (
    <svg
      aria-hidden
      className={`pointer-events-none ${className}`}
      width={size}
      height={size}
      viewBox="0 0 88 88"
      fill="none"
      style={style}
    >
      <circle cx="44" cy="44" r="36" stroke={sketchStroke} strokeWidth={1.2} strokeDasharray="3 5" />
      <circle cx="44" cy="44" r="24" stroke={sketchStrokeLight} strokeWidth={1} />
      <circle cx="76" cy="30" r="4" fill="rgb(42 157 143 / 0.3)" />
      <circle cx="18" cy="58" r="3" fill="rgb(30 58 95 / 0.15)" />
    </svg>
  );
}


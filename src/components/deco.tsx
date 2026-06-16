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

import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";

type Level = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export const AnimatedTitle: React.FC<{
  children: React.ReactNode;
  level: Level;
  delay?: number;
  accent?: boolean;
  style?: React.CSSProperties;
}> = ({ children, level, delay = 0, accent = false, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({ frame: frame - delay, fps, config: { damping: 20 } });
  const translateY = interpolate(progress, [0, 1], [40, 0]);
  const levelStyle = theme.fonts[level];

  return (
    <div
      style={{
        fontSize: levelStyle.size,
        fontWeight: levelStyle.weight,
        lineHeight: `${levelStyle.lineHeight}px`,
        color: accent ? theme.colors.accent : theme.colors.secondary,
        opacity: progress,
        transform: `translateY(${translateY}px)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

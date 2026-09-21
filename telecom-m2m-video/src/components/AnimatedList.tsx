import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";

export const AnimatedList: React.FC<{
  items: string[];
  startDelay: number;
  itemDelay?: number;
  numbered?: boolean;
  startNumber?: number;
  fontSize?: number;
  style?: React.CSSProperties;
}> = ({
  items,
  startDelay,
  itemDelay = 18,
  numbered = false,
  startNumber = 1,
  fontSize = 20,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14, ...style }}>
      {items.map((item, i) => {
        const progress = spring({
          frame: frame - startDelay - i * itemDelay,
          fps,
          config: { damping: 18 },
        });
        const translateX = interpolate(progress, [0, 1], [-30, 0]);

        return (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 14,
              opacity: progress,
              transform: `translateX(${translateX}px)`,
              fontSize,
              color: theme.colors.secondary,
              lineHeight: 1.6,
            }}
          >
            {numbered ? (
              <span
                style={{
                  color: theme.colors.accent,
                  fontWeight: 700,
                  flexShrink: 0,
                  minWidth: 28,
                }}
              >
                {startNumber + i}.
              </span>
            ) : (
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: theme.colors.accent,
                  marginTop: 10,
                  flexShrink: 0,
                }}
              />
            )}
            <span>{item}</span>
          </div>
        );
      })}
    </div>
  );
};

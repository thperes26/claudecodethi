import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";

export const Badge: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = spring({ frame: frame - delay, fps, config: { damping: 20 } });

  return (
    <div
      style={{
        display: "inline-block",
        opacity,
        textTransform: "uppercase",
        fontSize: 14,
        fontWeight: 700,
        color: theme.colors.accent,
        border: `1px solid ${theme.colors.accent}`,
        padding: "6px 16px",
        borderRadius: 4,
      }}
    >
      {children}
    </div>
  );
};

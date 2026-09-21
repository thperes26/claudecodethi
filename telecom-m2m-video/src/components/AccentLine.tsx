import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";

export const AccentLine: React.FC<{
  width: number;
  height?: number;
  delay?: number;
}> = ({ width, height = 4, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ frame: frame - delay, fps, config: { damping: 18 } });

  return (
    <div
      style={{
        width: progress * width,
        height,
        backgroundColor: theme.colors.accent,
      }}
    />
  );
};

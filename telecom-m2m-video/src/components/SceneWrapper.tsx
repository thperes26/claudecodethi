import React from "react";
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";

export const SceneWrapper: React.FC<{
  children: React.ReactNode;
  durationInFrames: number;
}> = ({ children, durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const fadeIn = spring({ frame, fps, config: { damping: 20 } });
  const fadeOut = spring({
    frame: frame - (durationInFrames - 15),
    fps,
    config: { damping: 20 },
    from: 1,
    to: 0,
  });
  const opacity = Math.min(fadeIn, fadeOut);

  const lineWidth = spring({ frame: frame - 5, fps, config: { damping: 18 } });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: theme.colors.primary,
        fontFamily: theme.fonts.family,
        opacity,
        padding: theme.spacing.pagePadding,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: `${lineWidth * 100}%`,
          height: 6,
          backgroundColor: theme.colors.accent,
        }}
      />
      {children}
    </AbsoluteFill>
  );
};

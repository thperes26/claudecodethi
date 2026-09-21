import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "../theme";

export const IconCamera: React.FC<{ delay?: number; size?: number }> = ({
  delay = 0,
  size = 120,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ frame: frame - delay, fps, config: { damping: 12 } });

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      style={{ transform: `scale(${scale})`, opacity: scale }}
    >
      <rect
        x="10"
        y="35"
        width="100"
        height="65"
        rx="10"
        stroke={theme.colors.accent}
        strokeWidth="5"
      />
      <path
        d="M40 35 L48 20 H72 L80 35"
        stroke={theme.colors.accent}
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <circle cx="60" cy="68" r="22" stroke={theme.colors.accent} strokeWidth="5" />
      <circle cx="60" cy="68" r="9" stroke={theme.colors.accent} strokeWidth="5" />
      <circle cx="92" cy="48" r="4" fill={theme.colors.accent} />
    </svg>
  );
};

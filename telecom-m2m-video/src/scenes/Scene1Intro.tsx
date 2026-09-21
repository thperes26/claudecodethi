import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { AnimatedTitle } from "../components/AnimatedTitle";
import { AccentLine } from "../components/AccentLine";
import { theme } from "../theme";

export const SCENE1_DURATION = 150;

const SubtitleRow: React.FC<{ children: React.ReactNode; delay: number }> = ({
  children,
  delay,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = spring({ frame: frame - delay, fps, config: { damping: 20 } });

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, opacity }}>
      <div
        style={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          backgroundColor: theme.colors.accent,
          flexShrink: 0,
        }}
      />
      <div
        style={{
          fontSize: theme.fonts.h3.size,
          fontWeight: theme.fonts.h3.weight,
          lineHeight: `${theme.fonts.h3.lineHeight}px`,
          color: theme.colors.secondary,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const Scene1Intro: React.FC = () => {
  return (
    <SceneWrapper durationInFrames={SCENE1_DURATION}>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
        }}
      >
        <AnimatedTitle level="h1" style={{ textAlign: "center" }}>
          TELECOM M2M
        </AnimatedTitle>

        <AccentLine width={600} height={2} delay={20} />

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <SubtitleRow delay={35}>CORE</SubtitleRow>
          <SubtitleRow delay={55}>CÂMERAS</SubtitleRow>
          <SubtitleRow delay={75}>CARGOTRACCK</SubtitleRow>
        </div>
      </div>
    </SceneWrapper>
  );
};

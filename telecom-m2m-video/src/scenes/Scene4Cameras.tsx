import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { AnimatedTitle } from "../components/AnimatedTitle";
import { Badge } from "../components/Badge";
import { AccentLine } from "../components/AccentLine";
import { IconCamera } from "../components/IconCamera";
import { theme } from "../theme";

export const SCENE4_DURATION = 210;

export const Scene4Cameras: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const textProgress = spring({ frame: frame - 70, fps, config: { damping: 30 } });
  const cardOpacity = spring({ frame: frame - 130, fps, config: { damping: 20 } });

  return (
    <SceneWrapper durationInFrames={SCENE4_DURATION}>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          textAlign: "center",
        }}
      >
        <IconCamera delay={0} />
        <Badge delay={25}>CÂMERAS</Badge>
        <AnimatedTitle level="h2" delay={35} style={{ textAlign: "center" }}>
          SMART CAMERAS
        </AnimatedTitle>
        <AccentLine width={80} delay={55} />
        <div
          style={{
            fontSize: theme.fonts.h5.size,
            lineHeight: `${theme.fonts.h5.lineHeight}px`,
            color: theme.colors.secondary,
            opacity: textProgress * 0.9,
            maxWidth: 860,
          }}
        >
          Uma solução avançada que é protagonista de uma operação mais segura,
          focadas nos comportamentos de risco e situações potencialmente
          perigosas através da videotelemetria. A tecnologia evolui e agora a
          nova geração de câmeras inteligentes traz novas funcionalidades
          unindo eventos de telemetria para transformar o potencial da sua
          frota e reduzir drasticamente essas estatísticas!
        </div>
        <div
          style={{
            opacity: cardOpacity,
            background: "rgba(255,255,255,0.08)",
            borderLeft: `4px solid ${theme.colors.accent}`,
            padding: "20px 28px",
            borderRadius: 8,
            maxWidth: 860,
            textAlign: "left",
          }}
        >
          <div
            style={{
              color: theme.colors.accent,
              fontWeight: 700,
              fontSize: 14,
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            NOVA FUNCIONALIDADE
          </div>
          <div style={{ color: theme.colors.secondary, fontSize: 18 }}>
            Com o Reconhecimento Facial, os eventos captados tanto pelas
            câmeras como pelo sistema de videotelemetria, podem ser vinculados
            ao motorista que está na operação.
          </div>
        </div>
      </div>
    </SceneWrapper>
  );
};

import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { AnimatedTitle } from "../components/AnimatedTitle";
import { Badge } from "../components/Badge";
import { AccentLine } from "../components/AccentLine";
import { theme } from "../theme";

export const SCENE2_DURATION = 180;

const MapPinIcon: React.FC<{ delay: number }> = ({ delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ frame: frame - delay, fps, config: { damping: 14 } });
  const rotate = interpolate(progress, [0, 1], [-10, 0]);

  return (
    <svg
      width={200}
      height={200}
      viewBox="0 0 200 200"
      fill="none"
      style={{ transform: `scale(${progress}) rotate(${rotate}deg)`, opacity: progress }}
    >
      <path
        d="M100 20C68 20 42 46 42 78C42 122 100 180 100 180C100 180 158 122 158 78C158 46 132 20 100 20Z"
        stroke={theme.colors.accent}
        strokeWidth="6"
      />
      <circle cx="100" cy="78" r="26" stroke={theme.colors.accent} strokeWidth="6" />
    </svg>
  );
};

export const Scene2Core: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const paragraphProgress = spring({ frame: frame - 50, fps, config: { damping: 30 } });

  return (
    <SceneWrapper durationInFrames={SCENE2_DURATION}>
      <div style={{ display: "flex", height: "100%", alignItems: "center", gap: 40 }}>
        <div style={{ width: "55%", display: "flex", flexDirection: "column", gap: 20 }}>
          <Badge>CORE</Badge>
          <AnimatedTitle level="h2" delay={15}>
            LOCALIZAÇÃO VEICULAR
          </AnimatedTitle>
          <AccentLine width={80} delay={35} />
          <div
            style={{
              fontSize: theme.fonts.h5.size,
              lineHeight: `${theme.fonts.h5.lineHeight}px`,
              color: theme.colors.secondary,
              opacity: paragraphProgress * 0.9,
              maxWidth: 700,
            }}
          >
            Encare o desafio de rastrear seus veículos de qualquer lugar. Nossas
            soluções de rastreamento de frota incluem um mapa de geolocalização
            e todas as ferramentas necessárias para gerenciar todo o trajeto de
            forma segura, além de fornecer acesso instantâneo a informações
            importantes sobre o veículo e comportamento de direção, como
            excesso de velocidade ou frenagem brusca.
          </div>
        </div>
        <div style={{ width: "45%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <MapPinIcon delay={0} />
        </div>
      </div>
    </SceneWrapper>
  );
};

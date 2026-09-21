import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { AnimatedTitle } from "../components/AnimatedTitle";
import { AnimatedList } from "../components/AnimatedList";
import { theme } from "../theme";

export const SCENE5_DURATION = 300;

const SECTION1_ITEMS = [
  "Analise os vídeos em alta resolução de comportamentos inseguros e situações de fadiga imediatamente",
  "Tenha uma visão gerencial da operação através de dashboards intuitivos",
  "Receba alertas por e-mail para visualizar e baixar a ocorrência na plataforma",
  "Envie áudios para o motorista, garantindo a interação segura",
];

const SECTION2_ITEMS = [
  "Analise casos de incidentes e acidentes através de vídeos requisitados",
  "Tenha evidências para planos de ação preventivos e corretivos",
];

const SectionLabel: React.FC<{ children: React.ReactNode; delay: number }> = ({
  children,
  delay,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = spring({ frame: frame - delay, fps, config: { damping: 20 } });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        opacity,
        color: theme.colors.accent,
        fontWeight: 700,
        fontSize: 18,
      }}
    >
      <span>▶</span>
      <span>{children}</span>
    </div>
  );
};

const Divider: React.FC<{ delay: number }> = ({ delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ frame: frame - delay, fps, config: { damping: 18 } });

  return (
    <div
      style={{
        width: `${progress * 100}%`,
        height: 1,
        backgroundColor: "rgba(255,255,255,0.2)",
      }}
    />
  );
};

export const Scene5CamerasList: React.FC = () => {
  return (
    <SceneWrapper durationInFrames={SCENE5_DURATION}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%", gap: 24 }}>
        <AnimatedTitle level="h3">Como o monitoramento por vídeo ajuda o Gestor:</AnimatedTitle>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <SectionLabel delay={20}>Durante as viagens</SectionLabel>
          <AnimatedList
            items={SECTION1_ITEMS}
            startDelay={40}
            itemDelay={25}
            numbered
            fontSize={19}
          />
        </div>

        <Divider delay={160} />

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <SectionLabel delay={175}>Depois das viagens</SectionLabel>
          <AnimatedList
            items={SECTION2_ITEMS}
            startDelay={195}
            itemDelay={25}
            numbered
            startNumber={SECTION1_ITEMS.length + 1}
            fontSize={19}
          />
        </div>
      </div>
    </SceneWrapper>
  );
};

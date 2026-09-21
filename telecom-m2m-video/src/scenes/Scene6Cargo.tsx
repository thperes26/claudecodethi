import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { AnimatedTitle } from "../components/AnimatedTitle";
import { Badge } from "../components/Badge";
import { theme } from "../theme";

export const SCENE6_DURATION = 360;

export const Scene6Cargo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const text1Progress = spring({ frame: frame - 40, fps, config: { damping: 30 } });
  const text2Progress = spring({ frame: frame - 110, fps, config: { damping: 30 } });
  const cardOpacity = spring({ frame: frame - 170, fps, config: { damping: 20 } });
  const statProgress = spring({ frame: frame - 260, fps, config: { damping: 12 } });
  const statScale = interpolate(statProgress, [0, 1], [0.5, 1]);

  return (
    <SceneWrapper durationInFrames={SCENE6_DURATION}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%", gap: 18 }}>
        <Badge>CARGOTRACCK</Badge>
        <AnimatedTitle level="h2" delay={15}>
          Desvendando a Cargo Tracck
        </AnimatedTitle>
        <AnimatedTitle level="h4" delay={25} accent>
          Uma Solução Além do Comum
        </AnimatedTitle>

        <div
          style={{
            fontSize: 20,
            lineHeight: "30px",
            color: theme.colors.secondary,
            opacity: text1Progress * 0.9,
            maxWidth: 1100,
          }}
        >
          A Cargo Tracck é uma solução da MICHELIN Connected Fleet Powered by
          Sascar que ultrapassa os limites do comum, trazendo para cada
          operação inteligência e tecnologia de ponta, com o maior portfólio
          de iscas do mercado para se adequar às necessidades da sua frota e
          da carga transportada.
        </div>

        <div
          style={{
            fontSize: 20,
            lineHeight: "30px",
            color: theme.colors.secondary,
            opacity: text2Progress * 0.9,
            maxWidth: 1100,
          }}
        >
          Os benefícios vão muito além do rastreamento, proporcionando um
          serviço imune ao Jammer, com posicionamento preciso, alertas e
          relatórios gerenciais, equipe de pronta resposta 24 horas e muito
          mais.
        </div>

        <div
          style={{
            opacity: cardOpacity,
            background: "rgba(252,229,0,0.12)",
            border: `1px solid ${theme.colors.accent}`,
            borderRadius: 10,
            padding: "28px 36px",
          }}
        >
          <div
            style={{
              fontSize: theme.fonts.h4.size,
              fontWeight: 700,
              color: theme.colors.accent,
              marginBottom: 10,
            }}
          >
            Iscas Cargo Tracck Para um Futuro Mais Seguro
          </div>
          <div style={{ fontSize: 18, color: theme.colors.secondary, opacity: 0.9 }}>
            A Cargo Tracck trabalha com iscas personalizadas descartáveis ou
            retornáveis, com potencial de personalização para cada carga
            transportada.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 6,
            marginTop: 10,
            opacity: statProgress,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: theme.colors.accent,
              transform: `scale(${statScale})`,
            }}
          >
            83%
          </div>
          <div style={{ fontSize: 20, color: theme.colors.secondary }}>
            Taxa de recuperação de cargas em 2020 com iscas Cargo Tracck
          </div>
          <div style={{ fontSize: 16, color: theme.colors.secondary, opacity: 0.7 }}>
            Nossa missão é aumentar cada vez mais essa taxa para proporcionar
            segurança extra a todos.
          </div>
        </div>
      </div>
    </SceneWrapper>
  );
};

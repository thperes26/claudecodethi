import React from "react";
import { SceneWrapper } from "../components/SceneWrapper";
import { AnimatedTitle } from "../components/AnimatedTitle";
import { AnimatedList } from "../components/AnimatedList";

export const SCENE3_DURATION = 420;

const ITEMS = [
  "Ver a localização do veículo e do motorista no mapa",
  "Alternar entre visualizações de mapa e tabelas em tempo real",
  "Definir rotas e alertas quando o motorista desvia de uma rota pré-determinada",
  "Encontrar o veículo mais próximo, planejar as rotas e se comunicar com o motorista",
  "Visualizar o tempo gasto em áreas produtivas e improdutivas",
  "Criar rotas e sobrepor as rotas e pontos de interesse no mapa",
  "Tacógrafo: configurar alertas de infração, obter visibilidade em tempo real e histórico",
  "Ver os níveis de combustível por veículo em tempo real",
  "Cercas por geolocalização — configurar zonas e alertas de entrada/saída",
  "Filtrar por grupo, atividade, estado EV e tags personalizadas — até 10.000 veículos",
];

const ITEM_DELAY = 35;
const START_DELAY = 30;
const COLUMN_1 = ITEMS.slice(0, 5);
const COLUMN_2 = ITEMS.slice(5, 10);

export const Scene3CoreList: React.FC = () => {
  return (
    <SceneWrapper durationInFrames={SCENE3_DURATION}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%", gap: 40 }}>
        <AnimatedTitle level="h3">O rastreamento de veículos ajuda você a:</AnimatedTitle>
        <div style={{ display: "flex", gap: 40 }}>
          <AnimatedList
            items={COLUMN_1}
            startDelay={START_DELAY}
            itemDelay={ITEM_DELAY}
            numbered
            fontSize={18}
            style={{ flex: 1 }}
          />
          <AnimatedList
            items={COLUMN_2}
            startDelay={START_DELAY + COLUMN_1.length * ITEM_DELAY}
            itemDelay={ITEM_DELAY}
            numbered
            startNumber={COLUMN_1.length + 1}
            fontSize={18}
            style={{ flex: 1 }}
          />
        </div>
      </div>
    </SceneWrapper>
  );
};

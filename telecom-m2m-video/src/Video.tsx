import React from "react";
import { Composition, Series } from "remotion";
import { Scene1Intro, SCENE1_DURATION } from "./scenes/Scene1Intro";
import { Scene2Core, SCENE2_DURATION } from "./scenes/Scene2Core";
import { Scene3CoreList, SCENE3_DURATION } from "./scenes/Scene3CoreList";
import { Scene4Cameras, SCENE4_DURATION } from "./scenes/Scene4Cameras";
import { Scene5CamerasList, SCENE5_DURATION } from "./scenes/Scene5CamerasList";
import { Scene6Cargo, SCENE6_DURATION } from "./scenes/Scene6Cargo";

const TOTAL_DURATION =
  SCENE1_DURATION +
  SCENE2_DURATION +
  SCENE3_DURATION +
  SCENE4_DURATION +
  SCENE5_DURATION +
  SCENE6_DURATION;

export const MainVideo: React.FC = () => (
  <Series>
    <Series.Sequence durationInFrames={SCENE1_DURATION}>
      <Scene1Intro />
    </Series.Sequence>
    <Series.Sequence durationInFrames={SCENE2_DURATION}>
      <Scene2Core />
    </Series.Sequence>
    <Series.Sequence durationInFrames={SCENE3_DURATION}>
      <Scene3CoreList />
    </Series.Sequence>
    <Series.Sequence durationInFrames={SCENE4_DURATION}>
      <Scene4Cameras />
    </Series.Sequence>
    <Series.Sequence durationInFrames={SCENE5_DURATION}>
      <Scene5CamerasList />
    </Series.Sequence>
    <Series.Sequence durationInFrames={SCENE6_DURATION}>
      <Scene6Cargo />
    </Series.Sequence>
  </Series>
);

export const RemotionVideo: React.FC = () => {
  return (
    <Composition
      id="TelecomM2M"
      component={MainVideo}
      durationInFrames={TOTAL_DURATION}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};

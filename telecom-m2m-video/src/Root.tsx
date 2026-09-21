import React, { useEffect, useState } from "react";
import { continueRender, delayRender } from "remotion";
import "./index.css";
import { RemotionVideo } from "./Video";
import { waitUntilDone } from "./fonts";

export const RemotionRoot: React.FC = () => {
  const [handle] = useState(() => delayRender("Loading Noto Sans font"));

  useEffect(() => {
    waitUntilDone()
      .then(() => continueRender(handle))
      .catch((err) => console.error(err));
  }, [handle]);

  return <RemotionVideo />;
};

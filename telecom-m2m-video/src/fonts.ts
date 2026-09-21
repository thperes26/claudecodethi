import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";

export const fontFamily = "Noto Sans";

export const waitUntilDone = () =>
  Promise.all([
    loadFont({
      family: fontFamily,
      url: staticFile("fonts/noto-sans-latin-400-normal.woff2"),
      weight: "400",
    }),
    loadFont({
      family: fontFamily,
      url: staticFile("fonts/noto-sans-latin-700-normal.woff2"),
      weight: "700",
    }),
  ]);

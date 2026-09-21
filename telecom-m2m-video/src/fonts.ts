import { loadFont } from "@remotion/google-fonts/NotoSans";

export const { fontFamily, waitUntilDone } = loadFont("normal", {
  weights: ["400", "700"],
  subsets: ["latin"],
});

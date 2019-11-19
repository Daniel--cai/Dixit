import { colors } from "./foundation/colors";
import { radii } from "./foundation/radii";
import { shadows } from "./foundation/shadows";

export default {
  breakpoints: ["40em", "52em", "64em"],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors,
  radii,
  // space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: "system-ui, sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace"
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  variants: {},
  text: {},
  buttons: {
    primary: {
      color: "white",
      bg: "primary"
    }
  },
  shadows
};

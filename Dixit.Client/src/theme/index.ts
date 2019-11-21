import { colors } from "./foundation/colors";
import { radii } from "./foundation/radii";
import { shadows } from "./foundation/shadows";

export default {
  breakpoints: ["40em", "52em", "64em"],
  fontSizes: [
    "0.5rem",
    "0.75rem",
    "1rem",
    "1.25rem",
    "1.5rem",
    "2rem",
    "3rem",
    "4rem"
  ],
  colors,
  radii,
  space: [0, "0.25rem", "0.5rem", "0.75rem", "1rem", "1.5rem", "2rem", "4rem"],
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

import { colors } from "./foundation/colors";
import { radii } from "./foundation/radii";
import { shadows } from "./foundation/shadows";


//realign font size baseline with typographical design system
const rowHeight: number = 16;
const baseFontSize:number = 10;
const descenderHeight: number = 1.5;
const descenderScale: number = 0.15;
const fontOffset: number = descenderScale * baseFontSize;
const fontSize: number = 1.6 * baseFontSize; 
const baseLineHeight: number = 3 * rowHeight;
const lineHeightOffset: number = (descenderHeight + baseLineHeight)/2

export default {
  breakpoints: ["40em", "52em", "64em"],
  fontSizes: [
    "0.5rem",
    "0.75rem",
    `${fontSize}rem`,
    "1.25rem",
    "1.5rem",
    "2rem",
    "3rem",
    "4rem"
  ],
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
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

  variants: {},
  text: {},
  buttons: {
    primary: {
      color: "white",
      bg: "primary"
    }
  },
  transitions: { default: "all 200ms ease-in-out" },
  shadows
};

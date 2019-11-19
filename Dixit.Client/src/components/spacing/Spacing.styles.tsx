import { SxStyleProp } from "theme-ui";
import { SpacingSize, SpacingType } from "./Spacing";

interface SpacingCssProps {
  size: SpacingSize;
  top?: boolean;
  right?: boolean;
  bottom?: boolean;
  left?: boolean;
  padding?: boolean;
}

export const spacing = {
  default: "1.5rem",
  micro: "0.25rem",
  tiny: "6px",
  small: "0.75rem",
  large: "2.5rem",
  huge: "5rem",
  enormous: "10rem"
};

export const marginStyle = (
  size: SpacingSize,
  dimensions: (string | false | undefined)[]
): string => {
  const forDimension = (dimension: any) =>
    dimensions.includes(dimension) ? spacing[size] || size : "0";
  if (dimensions.length === 0) return spacing[size];
  return [
    forDimension("top"),
    forDimension("right"),
    forDimension("bottom"),
    forDimension("left")
  ].join(" ");
};

export const spacingCss = (props: SpacingCssProps): SxStyleProp => {
  const { padding, size, top, right, bottom, left } = props;
  const dimensions: (string | false | undefined)[] = [
    top && "top",
    right && "right",
    bottom && "bottom",
    left && "left"
  ].filter(Boolean);
  let css: SxStyleProp = {};

  if (padding) {
    css.padding = marginStyle(size, dimensions);
  } else {
    css.margin = marginStyle(size, dimensions);
  }
  return css;
};

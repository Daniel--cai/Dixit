/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

import * as styles from "./Spacing.styles";

export type SpacingSize =
  | "micro"
  | "tiny"
  | "small"
  | "default"
  | "large"
  | "huge"
  | "enormous";

export type SpacingType = "margin" | "padding";
export interface SpacingProps {
  size: SpacingSize;
  top?: boolean;
  right?: boolean;
  left?: boolean;
  bottom?: boolean;
  inline?: boolean;
  padding?: boolean;
}
export const Spacing: React.FunctionComponent<SpacingProps> = ({
  top,
  right,
  bottom,
  left,
  size,
  inline,
  padding,
  children
}) => {
  if (inline) {
    return (
      <span
        sx={styles.spacingCss({
          size,
          padding,
          top,
          right,
          bottom,
          left
        })}
      >
        {children}
      </span>
    );
  }
  return (
    <div
      sx={styles.spacingCss({
        size,
        padding,
        top,
        right,
        bottom,
        left
      })}
    >
      {children}
    </div>
  );
};

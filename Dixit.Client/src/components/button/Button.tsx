/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

import * as styles from "./Button.styles";

export type ButtonSize = "large";
export type ButtonType = "primary" | "secondary" | "ghost";

export interface ButtonProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  children?: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  primary?: boolean;
  secondary?: boolean;
  onClick?: (e: React.SyntheticEvent) => any;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  id,
  children,
  className,
  onClick,
  primary,
  fullWidth,
  type,
  disabled,
  ...rest
}) => {
  return (
    <button
      disabled={disabled}
      sx={styles.buttonCss({ buttonType: "primary", buttonSize: "large" })}
      className={className}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

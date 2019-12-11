/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui";
import React from "react";
import * as styles from "./Input.styles";
interface Props extends React.TextareaHTMLAttributes<HTMLInputElement> {
  sx?: SxStyleProp
}

export const Input: React.FC<Props> = ({ sx, ...rest }) => {
  return (
    <input type="input" sx={{ ...sx!, ...styles.textAreaCss }} {...rest}></input>
  );
};

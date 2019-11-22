/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui";
import React from "react";
import * as styles from "./TextArea.styles";
import { StylesProps } from "styled-system";
interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  sx?: SxStyleProp
}

export const TextArea: React.FC<Props> = ({ sx, ...rest }) => {
  return (
    <textarea sx={{ ...sx!, ...styles.textAreaCss }} {...rest}></textarea>
  );
};

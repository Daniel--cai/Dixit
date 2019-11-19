/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import * as styles from "./TextArea.styles";
interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{
}

export const TextArea: React.FC<Props> = props => {
  return (
      <textarea sx={styles.textAreaCss} {...props}></textarea>
  );
};

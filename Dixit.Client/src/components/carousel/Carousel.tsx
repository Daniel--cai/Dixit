/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import * as styles from "./Carousel.styles";

export const Carousel: React.FC<{}> = props => {
  return <div 
    sx={styles.carouselCss}>
    {props.children}
  </div>;
};

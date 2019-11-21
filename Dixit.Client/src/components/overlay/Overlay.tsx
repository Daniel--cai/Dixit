/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import * as styles from "./Overlay.styles";

export const Overlay: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <div sx={styles.overlayCss} {...props} />
    );
};

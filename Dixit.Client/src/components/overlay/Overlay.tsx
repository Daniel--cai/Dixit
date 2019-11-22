/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui";
import React from "react";
import * as styles from "./Overlay.styles";

interface OverlayProps extends React.HTMLAttributes<HTMLDivElement> {
    sx: SxStyleProp;
}

export const Overlay: React.FC<OverlayProps> = ({ sx, ...rest }) => {
    return (
        <div sx={{ ...sx, ...styles.overlayCss, }} {...rest} />
    );
};

/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui";
import React from "react";
import * as styles from "./Lozenge.styles";

interface LozengeProps {
    sx?: SxStyleProp
}

export const Lozenge: React.FC<LozengeProps> = ({ sx, children, ...rest }) => {
    return (
        <div sx={{ ...sx!, ...styles.lozengeCss }} {...rest}>{children}</div>
    );
};


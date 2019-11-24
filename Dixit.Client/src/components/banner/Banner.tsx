/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui";

import React from "react";
import * as styles from "./Banner.styles";

interface BannerProps {
    children?: React.ReactNode;
    sx?: SxStyleProp
}

export const Banner: React.FC<BannerProps> = ({ children, sx, ...rest }) => {
    return (
        <div sx={{ ...sx!, ...styles.bannerCss }} {...rest}>{children}</div>
    );
};



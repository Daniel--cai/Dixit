/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui";

import React from "react";
import * as styles from "./Banner.styles";

interface BannerProps {
    children?: React.ReactNode;
    sx?: SxStyleProp
}

export const Banner: React.FC<BannerProps> = ({ children, ...rest }) => {
    return (
        <div sx={{ ...rest.sx || {}, ...styles.bannerCss }} {...rest}>{children}</div>
    );
};



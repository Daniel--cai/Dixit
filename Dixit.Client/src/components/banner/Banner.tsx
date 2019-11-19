/** @jsx jsx */
import { jsx } from "theme-ui";

import React from "react";
import * as styles from "./Banner.styles";

interface BannerProps {
    children?: React.ReactNode;
}

export const Banner: React.FC<BannerProps> = ({children, ...rest}) => {
    return (
        <div sx={styles.bannerCss} {...rest}>{children}</div>
    );
};



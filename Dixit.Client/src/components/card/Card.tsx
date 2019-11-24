/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui";
import React from "react";

import * as styles from "./Card.styles";


export interface CardProps extends  React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    className?: string;
    sx?: SxStyleProp
}

export const Card: React.FunctionComponent<CardProps> = ({
    children,
    className,
    sx,
}) => {
    return (
        <div
            sx={{ ...sx!, ...styles.cardCss({}) }}
            className={className}
        >
            {children}
        </div>
    );
};

/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

import * as styles from "./Card.styles";


export interface CardProps {
    children?: React.ReactNode;
    className?: string;
}

export const Card: React.FunctionComponent<CardProps> = ({
    children,
    className,
}) => {
    return (
        <div
            sx={styles.cardCss({})}
            className={className}
        >
            {children}
        </div>
    );
};

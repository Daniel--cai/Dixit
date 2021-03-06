/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui";
import React from "react";
import Logo from "../../assets/images/logo.png";
import * as styles from "./Card.styles";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    className?: string;
    sx?: SxStyleProp;
    src: string;
}

export const Card: React.FunctionComponent<CardProps> = ({
    children,
    className,
    sx,
    src,
    ...rest
}) => {
    return (
        <div sx={{ ...sx!, ...styles.cardCss({ src }) }} {...rest} >
            <img src={src} sx={{ ...styles.cardImageCss({ src: src }) }} />
        </div>
    );
};

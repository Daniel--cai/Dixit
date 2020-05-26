import { SxStyleProp } from "theme-ui";

interface CardCssProps {
    src: string;
}

export const cardImageCss = (props: CardCssProps): SxStyleProp => {
    return {
        width: ['100%', '100%', '100%'],
        height: 'auto',
        borderRadius: "medium",
        border: 'solid 0.5rem',
        borderColor: 'white',
        boxShadow: 'base'

    }
};

export const cardCss = (props: CardCssProps): SxStyleProp => {
    let css: SxStyleProp = {
        width: "100%",
        height: "100%",
        overflow: 'hidden',
        py: 'lg',
        px: 'lg',
        display: 'flex',
        alignItems: 'center',
    };
    return css;
};

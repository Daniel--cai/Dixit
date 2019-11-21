import { SxStyleProp } from "theme-ui";

interface CardCssProps {
}

export const cardCss = (props: CardCssProps): SxStyleProp => {
    let css: SxStyleProp = {
        padding: ["0", "0", "1"],
        width: "100%",
        flexBasis: ["50%", "50%", "33%"]
    };


    return css;
};

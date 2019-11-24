import { SxStyleProp } from "theme-ui";

interface CardCssProps {
}

export const cardCss = (props: CardCssProps): SxStyleProp => {
    let css: SxStyleProp = {
        // padding: ["0", "0", "1"],
        width: "100%",
        height: "100%",
        cursor: "pointer",
        ":hover": {
            boxShadow: "deep",
            opacity: 0.75
        }
    };
    return css;
};

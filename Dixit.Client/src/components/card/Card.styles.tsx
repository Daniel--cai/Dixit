import { SxStyleProp } from "theme-ui";

interface CardCssProps {
    src: string
}

export const cardCss = (props: CardCssProps): SxStyleProp => {
    let css: SxStyleProp = {
        // padding: ["0", "0", "1"],
        width: "100%",
        height: "100%",
        cursor: "pointer",
        backgroundImage: `url(${props.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center"

        // ":hover": {
        //     boxShadow: "deep",
        //     opacity: 0.75
        // }
    };
    return css;
};

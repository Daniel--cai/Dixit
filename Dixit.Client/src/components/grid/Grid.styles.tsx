import { SxStyleProp } from "theme-ui";

export const gridCss: SxStyleProp = {
    display: "flex",

    flexWrap: "wrap",
    "> *": {
        flex: '0 0 33%'
    }
}

export const animateFrom = {
    opacity: 0
}


export const animateTo = {
    opacity: 1
}
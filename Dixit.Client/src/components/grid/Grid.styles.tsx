import { SxStyleProp } from "theme-ui";

export const gridCss: SxStyleProp = {
    display: "flex", 
    flexWrap: "wrap",
    "> *": {
        flexBasis: '33%',
    }
}
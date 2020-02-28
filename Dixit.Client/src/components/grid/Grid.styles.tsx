import { SxStyleProp } from "theme-ui";

export const gridCss: SxStyleProp = {
    display: "flex", 
    flexWrap: "wrap",
    height: 'calc((100vh - 4rem - 4rem)/2)',
    "> *": {
        flexBasis: '33%',
    }
}
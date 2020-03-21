import { SxStyleProp } from "theme-ui";

export const gameScreenCss: SxStyleProp = {
    display: "grid",
    gridTemplateColumns: "auto 300px",
    gridTemplateRows: "4rem calc((100vh - 4rem - 4rem)/2) calc((100vh - 4rem - 4rem)/2)",
    height:"100%"
};

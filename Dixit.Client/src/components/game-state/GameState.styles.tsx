import { SxStyleProp } from "theme-ui";

export const storyStateCss: SxStyleProp = {
    width: ["100%", "100%", "30rem"],
    margin: "auto",
    display: "grid",
    gridTemplateRows: "auto 1fr",
    height: "100%"
};

export const storyScreenStateCss: SxStyleProp = {
    width: ["100%", "100%", "100%"],
    margin: "auto",
    display: "grid",
    gridTemplateRows: "4rem auto",
    height: "100%",
    justifyContent: 'center'
};

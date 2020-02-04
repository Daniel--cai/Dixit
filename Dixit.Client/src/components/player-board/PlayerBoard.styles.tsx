import { SxStyleProp } from "theme-ui";

export const playerBoardCss: SxStyleProp = {
    // backgroundColor: "primary",
    padding: "0.5em",
    margin: "0.5em",
    borderRadius: "soft",
    "& div": {
        display: "flex"
    },
}

export const playerBoardRankCss: SxStyleProp = {
    border: "1px solid",
    borderRadius: "soft",
    borderColor: "primary",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: "1rem",
    width:"3rem",
    textAlign: "center"

}




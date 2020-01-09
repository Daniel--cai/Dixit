import { SxStyleProp } from "theme-ui";

export const lobbyCss: SxStyleProp = {
    fontSize: "3",
    backgroundColor: "gray-10"
};

export const lobbyScreenCss: SxStyleProp = {
    display: "grid",
    gridTemplateRows: "100px auto 100px",
    height: "calc(100vh - 3rem)",
    minHeight: ["0", "0", "750px"],
    background: "secondary"
}

export const segmentCss: SxStyleProp = {
    display: "grid",
    gridGap: "0.5em",
    gridTemplateRows: "repeat(8, 1fr)",
    background: "gray-20",
    padding: "1rem 0",
}

export const segmentLineCss: SxStyleProp = {
    background: "white",
    display: "flex",
    flexDirection: "row",
    color: "black",
    fontWeight: "bold",
    boxShadow: "base",
    borderRadius: "soft",
    margin: "0 1rem",
    padding: "md",
    "> div": {
        flex: "1",
        alignItems: "center",
        display: "flex",
    }
}

export const indicatorCss: SxStyleProp = {
    // justifyContent: "flex-start",
    marginRight:"md",
    color:"green"
}

export const textCss: SxStyleProp = {
    
}
export const codeCss: SxStyleProp = {
    alignSelf: "center",
    justifyContent: "center",
    display: "inline-block",
    borderRadius: "4px",
    height: "55px",
    color: "black",
    fontSize: "6"
}

export const closeCss: SxStyleProp = {
    justifyContent: "flex-end",
    color:"gray-20",
    "> i": {
        cursor: "pointer"
    }
}

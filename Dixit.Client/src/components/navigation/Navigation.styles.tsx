import { SxStyleProp } from "theme-ui";

export const navigationCss: SxStyleProp = {
    width: "100%",
    backgroundColor: "orange-dark-1",
    boxShadow: "base",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "auto 1fr auto"
};

export const navigationLogoCss: SxStyleProp = {
    gridColumn: 1,
    textAlign: "left",
    fontSize: "40px",
    padding: "0.5rem 0.5rem 0 0.5rem"
};

export const leftMenuCss: SxStyleProp = {
    alignSelf: "center",
    gridColumn: "2",
};

export const leftMenuLinkCss: SxStyleProp = {
    padding: "10px",
    margin: "0 15px",
    fontSize: "2rem",
    fontWeight: "300",
    letterSpacing: "0.5px",
    textDecoration:"none",
    color:"white",
    ':hover': {
        color: "orange-light-2",
    }
}

export const leftMenuLinkSpanCss: SxStyleProp = {
    display: "inline-block",
}
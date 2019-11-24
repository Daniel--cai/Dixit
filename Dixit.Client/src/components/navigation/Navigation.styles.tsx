import { SxStyleProp } from "theme-ui";
import { TransitionStatus } from "react-transition-group/Transition";
import { flex } from "styled-system";

export const navigationBaseCss = {
    width: "100%",
    backgroundColor: "orange-dark-1",
    boxShadow: "base",
    margin: "0 auto",
    height: ["3rem", "3rem", "4rem"]
}

export const navigationCss: SxStyleProp = {
    ...navigationBaseCss,
    gridTemplateColumns: "auto 1fr auto",
    display: ["none", "none", "grid"]
};

export const navigationLogoCss: SxStyleProp = {
    gridColumn: 1,
    textAlign: "left",
    fontSize: "40px",
    padding: "0.5rem 0.5rem 0 0.5rem",
};

export const leftMenuCss: SxStyleProp = {
    alignSelf: "center",
    gridColumn: "2",
    '& a': {
        padding: "10px",
        margin: "0 15px",
        fontSize: "3",
        letterSpacing: "0.5px",
        textDecoration: "none",
        color: "white",
        ':hover': {
            color: "orange-light-2",
        },
        '& span': {
            display: "inline-block",
        }
    }
};

export const navigationMobileCss: SxStyleProp = {
    ...navigationBaseCss,
    gridTemplateColumns: "3rem auto 3rem",
    display: ["grid", "grid", "none"],
    fontSize: 3,
    fontWeight: "bold",
    color: "white",
    '> *': {
        padding: "3"
    }

};

export const navigationLinkMobileCss: SxStyleProp = {
    display: "flex",
    flexDirection: "column"
};


type TransitionCSSGroup = { [key in TransitionStatus]: SxStyleProp };

export const slideInRightTransitionCss: TransitionCSSGroup = {
    entering: { transform: "translateX(-100%)" },
    entered: { transform: "translateX(0%)" },
    exiting: { transform: "translateX(-100%)" },
    exited: { transform: "translateX(-100%)" },
    unmounted: { transform: "translateX(-100%)" },
}

export const opacityTransitionCss: TransitionCSSGroup = {
    entering: { opacity: 0 },
    entered: { opacity: 0.5 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
    unmounted: { opacity: 0 },
}

export const accordionCss: SxStyleProp = {
    position: "fixed",
    top: "0",
    width: "15rem",
    zIndex: "501",
    height: "100%",
    left: "0",
    overflow: "hidden",
    backgroundColor: "white",
    transition: "all 200ms ease-in-out",
}

export const overlayTransitionCss: SxStyleProp = {
    transition: "all 200ms ease-in-out",
}

import { SxStyleProp } from "theme-ui";
import { TransitionStatus } from "react-transition-group/Transition";
import { flex } from "styled-system";
import { transform } from "@babel/core";

export const navigationBaseCss = {
    width: "100%",
    backgroundColor: "white",
    boxShadow: "faint",
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
        color: "gray-300",
        ':hover': {
            color: "primary",
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
    color: "primary",
    '> *': {
        padding: "0.75rem",
        lineHeight: "1.5rem"
    }

};

export const burgerCss = (active: boolean) => {
    const style: SxStyleProp = {
        position: 'relative',
        width: '3rem',
        height: '3rem',
        cursor: 'pointer',
        '> div': {
            position: 'absolute',
            height: '3px',
            left: '12px',
            width: '1.5rem',
            top: '14px',
            backgroundColor: 'primary',
            transition: 'all 0.4s cubic-bezier(0, 0, 0, 1) 0s',
        },
        '> div:nth-child(1)': {
            transform: 'none'
        },
        '> div:nth-child(2)': {
            top: '22px',
            transform: 'none'
        },
        '> div:nth-child(3)': {
            top: '30px',
            transform: 'none'
        },
    }
    if (active) {
        style['> div:nth-child(1)'] = {
            transform: 'rotate(45deg) translate(7.77px, 7.77px)'
        };
        style['> div:nth-child(2)'] = {
            top: '23px',
            opacity: 0
        };
        style['> div:nth-child(3)'] = {
            transform: 'rotate(-45deg) translate(7.77px,-7.77px)',
            top: '34px',
        }

    }

    return style;
}

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

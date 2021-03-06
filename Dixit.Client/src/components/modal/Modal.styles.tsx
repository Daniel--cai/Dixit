import { SxStyleProp } from "theme-ui";
import { TransitionStatus } from "react-transition-group/Transition";

export const opacityTransitionCss: { [key in TransitionStatus]: SxStyleProp } = {
    entering: { opacity: 0, transform: "translateY(-5%)" },
    entered: { opacity: 1, transform: "translateY(0%)" },
    exiting: { opacity: 0, transform: "translateY(-5%)" },
    exited: { opacity: 0, transform: "translateY(-5%)" },
    unmounted: { opacity: 0, transform: "translateY(-5%)" },
}

export const inputModalCss: SxStyleProp = {
    width: "100%",
    height: "100vh",
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    top: 0,
    left: 0,
    zIndex: "2",
    transition: "all 200ms ease-in-out",
}

export const inputWrapperCss: SxStyleProp = {
    width: ["100%", "30rem", "35rem"],
    boxShadow: "base",
    // height: 40vh",
    backgroundColor: "white",
    display: "flex",
    alignSelf: "center",
    flexDirection: "column",
    margin: ["unset", "auto", "auto"],
    position: "relative",
    borderRadius: "soft",
    // input,
    // textarea {
    //   text-align: left",
    //   padding: 0.5em",
    //   border: none",
    //   padding: 1em 1em",
    // }

}

export const inputWrapperImageCss: SxStyleProp = {
    borderRadius:"circle",
    width: "8rem",
    height: "8rem"
}

export const inputWrapperCaptionCss: SxStyleProp = {
    fontSize: "2",
    fontWeight: "bold",
    paddingTop: "sm",
    paddingBottom: "sm",
    color: "primary",
    display: "grid",
    gridTemplateColumns: "3rem auto 3rem",
    backgroundColor: "white",
    textAlign: "center",
    borderTopLeftRadius: "soft",
    borderTopRightRadius: "soft",
   
}

export const inputWrapperSubCaptionCss: SxStyleProp = {
    fontSize: "2",
    fontWeight: "bold",
    paddingTop: "2",
    paddingBottom: "2",
    color: "primary",
    display: "grid",
    gridTemplateColumns: "3rem auto 3rem",
    backgroundColor: "white",
    textAlign: "center",
    borderTopLeftRadius: "soft",
    borderTopRightRadius: "soft",
    "& div": {
        color: "gray-500"
    }
}


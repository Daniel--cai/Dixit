import { SxStyleProp } from "theme-ui";
import { TransitionStatus } from "react-transition-group/Transition";
import { backgroundColor, textAlign } from "styled-system";

export const opacityTransitionCss: { [key in TransitionStatus]: SxStyleProp } = {
    entering: { opacity: 0, transform: "translateY(-100%)" },
    entered: { opacity: 1, transform: "translateY(0%)" },
    exiting: { opacity: 0, transform: "translateY(-100%)" },
    exited: { opacity: 0, transform: "translateY(-100%)" },
    unmounted: { opacity: 0, transform: "translateY(-100%)" },
}

export const modalCss: SxStyleProp = {
    position: "fixed",
    width: "100%",
    zIndex: 1,
    opacity: 1,
    height: "100vh",
    background: "$main-color",
    display: "grid",
    gridTemplateRows: "auto 100px",

}
export const modalContentCss: SxStyleProp = {
    // width: 50%;
    borderRadius: "4px",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    filter: "grayscale(75%)"
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
    boxShadow: "layer",
    // height: 40vh",
    backgroundColor: "blue-light-2",
    display: "flex",
    alignSelf: "center",
    flexDirection: "column",
    margin: ["unset", "auto", "auto"],
    position: "relative"
    // input,
    // textarea {
    //   text-align: left",
    //   padding: 0.5em",
    //   border: none",
    //   padding: 1em 1em",
    // }

}
export const inputWrapperCaptionCss: SxStyleProp = {
    fontSize: "4",
    paddingTop: "3",
    paddingBottom: "3",
    color: "primary",
    display: "grid",
    gridTemplateColumns: "3rem auto 3rem",
    backgroundColor: "white",
    textAlign: "center"
}
        // img {
        //   width: auto;
        //   height: auto;
        //   max-width: 100%;
        //   max-height: 100%;
        //   object-fit: cover;
        // }

        // .modal__button__edit {
        //     justify-self: right;
        //     align-self: top;
        //     margin: 0 1em;
        //   }
        // }
    //   .modal__content__message {
    //     font-size: 2em;
    //     margin: 1em;
    //     color: $contrast;
    //   }

    //   .modal__content__card {
    //     // width: 50%;
    //     border-radius: $card-border-radius;
    //     align-items: center;
    //     justify-content: center;
    //     display: flex;
    //     // filter: blur(5px) grayscale(50%);
    //     filter: grayscale(75%);
    //     img {
    //       width: auto;
    //       height: auto;
    //       max-width: 100%;
    //       max-height: 100%;
    //       object-fit: cover;
    //     }
    //   }



import { SxStyleProp } from "theme-ui";

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
    alignItems: "center",
    zIndex: "2",

}

export const inputWrapperCss: SxStyleProp = {
    width: "90%",
    boxShadow: "layer",
    // height: 40vh",
    backgroundColor: "white",
    // input,
    // textarea {
    //   text-align: left",
    //   padding: 0.5em",
    //   border: none",
    //   padding: 1em 1em",
    // }
}
export const inputWrapperCaptionCss: SxStyleProp = {
    fontSize: "1.5em",
    padding: "0.5em 0",
    color:"primary"
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



import { SxStyleProp } from "theme-ui";

export const inputCss: SxStyleProp = {
    borderRadius: "soft",
    border: "1px solid",
    borderColor: "gray-20",
    fontSize: "2",
    lineHeight: "body",
    outline: "none",
    backgroundColor: "white",
    color: "black",
    padding: "0.2rem",
    width: "100%",
    display: "block",
    textAlign: "center",
    "WebkitAppearance": "none",
    ':hover': {
        borderColor: "gray-30"
    },
    ':focus': {
        borderColor: "primary",
        //backgroundColor: "blue-light-2"
    },
    "button + button": {
        marginLeft: "1"
    },

};

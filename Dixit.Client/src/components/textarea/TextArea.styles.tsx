import { SxStyleProp } from "theme-ui";

export const textAreaCss: SxStyleProp = {
    width: "90%",
    borderRadius: "none",
    border: "1px solid",
    borderColor: "gray-20",
    padding: "4",
    fontSize: "4",
    outline: "none",
    resize: "none",
    backgroundColor: "white",
    "WebkitAppearance": "none",
    ':hover': {
        borderColor: "gray-30"
    },
    ':focus': {
        borderColor: "orange-light-1"
    },
};

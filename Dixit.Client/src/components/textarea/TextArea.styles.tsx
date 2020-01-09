import { SxStyleProp } from "theme-ui";
import { backgroundColor } from "styled-system";

export const textAreaCss: SxStyleProp = {
    width: "90%",
    borderRadius: "soft",
    border: "1px solid",
    borderColor: "gray-20",
    padding: "md",
    fontSize: "4",
    outline: "none",
    resize: "none",
    backgroundColor: "white",
    "WebkitAppearance": "none",
    ':hover': {
        borderColor: "gray-30"
    },
    ':focus': {
        borderColor: "primary",
        //backgroundColor: "blue-light-2"
    },
};

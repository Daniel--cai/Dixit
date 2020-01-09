import { SxStyleProp } from "theme-ui";
import { backgroundColor } from "styled-system";

export const textAreaCss: SxStyleProp = {
    borderRadius: "soft",
    border: "1px solid",
    borderColor: "gray-20",
    fontSize: "2",
    lineHeight: "body",
    outline: "none",
    backgroundColor: "white",
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
    }
};

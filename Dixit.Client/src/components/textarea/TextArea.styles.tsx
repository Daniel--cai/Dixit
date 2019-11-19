import { SxStyleProp } from "theme-ui";

export const textAreaCss: SxStyleProp = {
    width: "90%",
    border: "1px solid",
    borderColor: "gray-20",
    padding: "10px",
    fontSize: "18px",
    height: "150px",
    outline: "none",
    resize: "none",
    ':hover': {
        borderColor: "gray-30"
    },
    ':focus': {
        borderColor: "blue-light-1"
    },
};

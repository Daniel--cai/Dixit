import { SxStyleProp } from "theme-ui";
import { ButtonType, ButtonSize } from "./Button";

interface ButtonCssProps {
  buttonType: ButtonType;
  buttonSize: ButtonSize;
  round?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  active?: boolean;
  icon?: boolean;
}

export const buttonCss = (props: ButtonCssProps): SxStyleProp => {
  let css: SxStyleProp = {
    height: "2rem",
    border: "1px solid",
    borderColor: "primary",
    outline: "none",

    borderRadius: "0.25rem",
    cursor: "pointer",
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    textAlign: "center",
    textTransform: "lowercase"
  };

  css[":hover"] = {
    backgroundColor: "orange",
    color: "white",
    borderColor: "orange"
  };

  if (props.fullWidth) {
    css.width = "100%";
    css.display = "flex";
  }

  return css;
};

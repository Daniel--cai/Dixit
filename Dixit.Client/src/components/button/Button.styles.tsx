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
    border: "1px solid",
    borderColor: "primary",
    backgroundColor: "primary",
    outline: "none",
    cursor: "pointer",
    paddingTop: "3",
    paddingBottom: "3",
    paddingLeft: "4",
    paddingRight: "4",
    fontSize: "1rem",
    textAlign: "center",
    color: "white",
    boxShadow: "base"
  };

  css[":hover"] = {
    backgroundColor: "primaryLight",
    color: "white",
    borderColor: "primaryLight"
  };

  if (props.fullWidth) {
    css.width = "100%";
    css.display = "flex";
  }

  return css;
};

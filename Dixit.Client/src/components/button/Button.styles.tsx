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
    paddingLeft: "5",
    paddingRight: "5",
    fontSize: "1rem",
    textAlign: "center",
    color: "white",
    boxShadow: "base",
    borderRadius: "soft"
  };

  css[":hover"] = {
    backgroundColor: "orange-light-1",
    color: "white",
    borderColor: "orange-light-1"
  };

  if (props.fullWidth) {
    css.width = "100%";
    css.display = "flex";
  }

  return css;
};

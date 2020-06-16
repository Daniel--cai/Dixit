import { SxStyleProp } from "theme-ui";

export const gridCss = (fanned: boolean): SxStyleProp => {
  const css: SxStyleProp = {
    display: "flex",
    flexWrap: "wrap",
    "> *": {
      flex: "0 0 33%",
    },
  };

  if (fanned) {
    css["gridRow"] = "2 / 4";
    css["> div:nth-child(1), > div:nth-child(4)"] = {
      transform: "rotate(-7deg) translate(0,1rem)",
    };
    css["> div:nth-child(3),  > div:nth-child(6) "] = {
      transform: "rotate(7deg) translate(0,1rem)",
    };
  }

  return css;
};

export const animateFrom = {
  opacity: 0,
};

export const animateTo = {
  opacity: 1,
};

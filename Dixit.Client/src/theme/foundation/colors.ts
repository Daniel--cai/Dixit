//seed #0a84ff
//https://palx.jxnblk.com/

const gray = {
  black: "rgb(0, 0, 0)",
  white: "rgb(255, 255, 255)",
  transparent: "rgba(0, 0, 0, 0.4)",
  "gray-10": "#FAFBFD",
  "gray-20": "#F0F3F7",
  "gray-30": "#C2C7D2",
  "gray-40": "#bdc5cc",
  "gray-50": "#abb4be",
  "gray-60": "#98a1a8",
  "gray-70": "#7c8b9a",
  "gray-80": "#616d7b",
  "gray-90": "#394048"
};

const others = {
  "green-light-2": "#62ff62",
  "green-light-1": "#09e309 ",
  green: "#08d008",
  "green-dark-1": "#07ba07",
  "green-dark-2": "#057e05",

  "blue-light-3": "#e0efff",
  "blue-light-2": "#F2F8FE",
  "blue-light-1": "#8BB9F7",
  blue: "#3375F6",
  "blue-dark-1": "#2961CC",
  "blue-dark-2": "#0B2349",
  "blue-dark-3": "#086bce",

  "violet-light-2": "#ecdaff",
  "violet-light-1": "#dab5ff ",
  violet: "#ce9eff",
  "violet-dark-1": "#c184ff",
  "violet-dark-2": "#9328ff",

  "red-light-2": "#ffd7d7",
  "red-light-1": "#ffafaf ",
  red: "#ff9595",
  "red-dark-1": "#ff7474",
  "red-dark-2": "#d90909",

  "yellow-light-2": "#e8e809",
  "yellow-light-1": "#caca08 ",
  yellow: "#b9b907",
  "yellow-dark-1": "#a5a506",
  "yellow-dark-2": "#707004",

  "orange-light-2": "#ffdab6",
  "orange-light-1": "#ffb469 ",
  orange: "#ff9b36",
  "orange-dark-1": "#f6800a",
  "orange-dark-2": "#a75707"
};

const semantics = {
  success: "",
  "success-light": "#00C54A",
  warning: "#FF9C2B",
  "warning-light": "",
  danger: "",
  "error-light": "#F13C46",
  info: "#0D69D1",
  muted: gray["gray-10"]
};

const primary = {
  primary: others.blue,
  "primary-light": others["blue-light-1"],
  "primary-dark": others["blue-dark-2"],
  "nav-primary": "#3375F6",
  "nav-secondary": "#C2C5C9",
  "bg-primary": gray["gray-10"],
  "bg-secondary": gray["gray-20"]
};

export const colors = { ...gray, ...others, ...primary, ...semantics };

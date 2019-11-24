//seed #0a84ff
//https://palx.jxnblk.com/

const gray = {
  black: "rgb(0, 0, 0)",
  white: "rgb(255, 255, 255)",
  transparent: "rgba(0, 0, 0, 0.4)",
  "gray-10": "#f9f9fa",
  "gray-20": "#eceef0",
  "gray-30": "#ced3d9",
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
  "blue-light-2": "#c9e4ff",
  "blue-light-1": "#93c9ff",
  blue: "#71b8ff",
  "blue-dark-1": "#49a4ff",
  "blue-dark-2": "#1288ff",
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
  primary: others.orange,
  "primary-light": others["orange-light-2"],
  "primary-dark": others["orange-dark-2"]
};

export const colors = { ...gray, ...others, ...primary, ...semantics };

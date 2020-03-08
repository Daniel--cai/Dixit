//seed #00B2CA
//https://palx.jxnblk.com/

const gray = {
  black: "#333333",
  white: "#ffffff",
  hover: "rgba(0, 0, 0, 0.6)",
  "gray-100": "#f9f9fa",
  "gray-200": "#ebeeee",
  "gray-300": "#dde2e2",
  "gray-400": "#cdd4d5",
  "gray-500": "#bcc5c7",
  "gray-600": "#a9b5b7",
  "gray-700": "#94a3a4",
  "gray-800": "#7a8c8f",
  "gray-900": "#597073"
};

const others = {
  "purple-100": "#839EBE",
  "purple-200": "#466E9E",
  "purple-300": "#1D4E89",
  "purple-400": "#184071",
  "purple-500": "#102B4B",

  "blue-100": "#d6f3f7",
  "blue-200": "#b8e9f0",
  "blue-300": "#00B2CA",
  "blue-400": "#0097ab",
  "blue-500": "#007787",

  "green-100": "#c6eacd",
  "green-200": "#abdfb5",
  "green-300": "#85c190",
  "green-400": "#76ac81",
  "green-500": "#66946f",

  "yellow-100": "#fdebd7",
  "yellow-200": "#fcdbb8",
  "yellow-300": "#f6cc9f",
  "yellow-400": "#d0ad87",
  "yellow-500": "#ba9a78",

  "orange-100": "#fcdac6",
  "orange-200": "#fbc8ab",
  "orange-300": "#f89d68",
  "orange-400": "#e78750",
  "orange-500": "#c67445",

}

const semantics = {
  success: "",
  "success-light": "#00C54A",
  warning: "#FF9C2B",
  "warning-light": "",
  danger: "",
  "error-light": "#F13C46",
  info: "#0D69D1",
  muted: gray["gray-100"]
};

const primary = {
  primary: others["blue-300"],
  "primary-light": others["blue-200"],
  "primary-dark": others["blue-400"],
  "nav-primary": "#3375F6",
  "nav-secondary": "#FAFBFD",
  "bg-primary": gray["gray-100"],
  "bg-secondary": gray["gray-200"]
};

export const colors = { ...gray, ...others, ...primary, ...semantics };

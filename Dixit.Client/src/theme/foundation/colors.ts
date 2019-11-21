//seed #3eb8f0
//https://palx.jxnblk.com/

const gray = {
  black: "rgb(0, 0, 0)",
  white: "rgb(255, 255, 255)",
  transparent: "rgba(0, 0, 0, 0.4)",
  "gray-10": "#eceeef",
  "gray-20": "#dee1e3",
  "gray-30": "#cfd3d7",
  "gray-40": "#bfc5c9",
  "gray-50": "#adb4b9",
  "gray-60": "#98a1a8",
  "gray-70": "#7f8b93",
  "gray-80": "#606e79",
  "gray-90": "#374047"
};

const others = {
  "green-light-2":"#9ff689",
  "green-light-1":"#5bde39 ",
  "green":"#53cb35",
  "green-dark-1":"#4ab62f",
  "green-dark-2":"#327b20",
  "blue-light-3":"#f3fbfe",
  "blue-light-2":"#d9f2fc",
  "blue-light-1":"#76cff4",
  "blue":"#49bff1",
  "blue-dark-1":"#39abdb",
  "blue-dark-2":"#267495",
  "blue-dark-3": "#3e4452",
  
  "violet-light-2":"#e6dcfc",
  "violet-light-1":"#cdbafa ",
  "violet":"#9eb0f7",
  "violet-dark-1":"#ad8ef6",
  "violet-dark-2":"#7a47f1",

  "red-light-2":"#fcd8df",
  "red-light-1":"#f9b0bf ",
  "red":"#f798ab",
  "red-dark-1":"#f57992",
  "red-dark-2":"#c63351",

  "yellow-light-2":"#f6e08b",
  "yellow-light-1":"#e3c13b ",
  "yellow":"#d0b136",
  "yellow-dark-1":"#ba9e30",
  "yellow-dark-2":"#7e6b20",

  "orange-light-2":"#fbdacc",
  "orange-light-1":"#f7b599 ",
  orange:"#f59e79",
  "orange-dark-1":"#f18151",
  "orange-dark-2":"#ac522c",
};

const semantics = {
  success:"",
  "success-light":"#00C54A",
  warning: "#FF9C2B",
  "warning-light": "",
  danger:"",
  "error-light":"#F13C46",
  info: "#0D69D1",
  muted: gray["gray-10"]
}

const primary = {
  primary: others["blue-dark-1"],
  primaryLight: others.blue,
  primaryDark: others["blue-dark-2"]
};

export const colors = { ...gray, ...others, ...primary, ...semantics };

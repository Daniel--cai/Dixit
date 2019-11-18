// $shadows-data: (

// /// Returns the shadow for the specified depth
// /// @param {String} $depth [base] - The shadow’s depth.
// /// @return {List} The shadow value.

// @function shadow($depth: base) {
//   $fetched-value: map-get($shadows-data, $depth);

//   @if type-of($fetched-value) == list {
//     @return $fetched-value;
//   } @else {
//     @error 'Shadow variant `#{$depth}` not found. Available variants: #{available-names($shadows-data)}';
//   }
// }

export default {
  breakpoints: ["40em", "52em", "64em"],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    blue: "#07c",
    lightgray: "#f6f6ff"
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: "system-ui, sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace"
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  shadows: {
    small: "0 0 4px rgba(0, 0, 0, .125)",
    large: "0 0 24px rgba(0, 0, 0, .125)"
  },
  variants: {},
  text: {},
  buttons: {
    primary: {
      color: "white",
      bg: "primary"
    }
  },
  shadow: {
    //   faint: (
    //     0 1px 0 0 rgba(22, 29, 37, 0.05),
    //   ),
    //   base: (
    //     0 0 0 1px rgba(63, 63, 68, 0.05),
    //     0 1px 3px 0 rgba(63, 63, 68, 0.15),
    //   ),
    //   deep: (
    //     0 0 0 1px rgba(6, 44, 82, 0.1),
    //     0 2px 16px rgba(33, 43, 54, 0.08),
    //   ),
    //   layer: (
    //     0 31px 41px 0 rgba(32, 42, 53, 0.2),
    //     0 2px 16px 0 rgba(32, 42, 54, 0.08),
    //   ),
    //   transparent: 0 0 0 0 transparent,
  }
};

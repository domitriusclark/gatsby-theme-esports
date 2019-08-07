import breakpoints from "./breakpoints";
import colors from "./colors";
import elementStyles from "./elementStyles";
import typography from "./typography";
import textStyles from "./textStyles";

const theme = {
  useCustomProperties: true,

  // Colors
  color: {
    ...colors
  },

  // Typography & text
  ...typography,
  textStyles,

  // Spacing,
  space: 4,
  radii: [4, 8],

  styles: {
    ...elementStyles
  },

  // Breakpoints
  breakpoints: breakpoints
};

export default theme;

import colors from "./colors";

const basicButtonStyle = {
  border: `2px solid ${colors.borderColor}`,
  borderRadius: 4,
  textAlign: "center",
  textDecoration: "none"
};

const textStyles = {
  button: {
    ...basicButtonStyle,
    primary: {
      background: colors.primaryColor,
      "&:hover": {
        background: colors.secondaryColor
      }
    },
    secondary: {
      background: colors.secondaryColor,
      "&:hover": {
        background: colors.primaryColor
      }
    }
  },
  navLink: {
    display: "inline-block",
    color: "inherit",
    textDecoration: "none",
    lineHeight: 1,
    mx: 1
  }
};

export default textStyles;

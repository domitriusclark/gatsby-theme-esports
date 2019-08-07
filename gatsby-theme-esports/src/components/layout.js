import React from "react";
import { ThemeProvider } from "theme-ui";
import { theme } from "../gatsby-plugin-theme-ui/index";
import Nav from "./nav";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      {children}
    </ThemeProvider>
  );
};

export default Layout;

import React, { Fragment } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "../theme";

const GlobalStyle = createGlobalStyle`
    *,
    *::after ,
    *::before {
        margin: 0;
        padding: 0;
    }

    html {
        height: 100%;
        width: 100%;
        background: ${props => props.theme.colors.primaryColor};
        padding: 0;
        margin: 0 auto;
        font-size: 62.5%;  /* 10px === 1rem */
    }

    body {
        margin: 0 auto;
        padding: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;

        & a {
            &:after,
            &:visited {
                text-decoration: none;
            }

            &:hover {
                text-decoration: none;
            }
        }
    }
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        {children}
      </Fragment>
    </ThemeProvider>
  );
};

export default Layout;

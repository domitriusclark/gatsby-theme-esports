import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useStaticQuery, graphql } from "gatsby";
import { device } from "../theme/device";

const optionsQuery = graphql`
  {
    sitePlugin(name: { eq: "gatsby-theme-esports" }) {
      pluginOptions {
        navLinks
        colors {
          primaryColor
          secondaryColor
          background
        }
      }
    }
  }
`;

const Layout = ({ children }) => {
  const { height } = useWindowDimensions();

  const { sitePlugin } = useStaticQuery(optionsQuery);

  const pluginColors = sitePlugin.pluginOptions.colors;

  const theme = {
    colors: { ...sitePlugin.pluginOptions.colors },
    ...device
  };

  return (
    <ThemeProvider theme={pluginColors && theme}>
      <Container>
        <GlobalStyle height={height} />
        {children}
      </Container>
    </ThemeProvider>
  );
};

const GlobalStyle = createGlobalStyle`
    *,
    *::after ,
    *::before {
        margin: 0;
        padding: 0;
    }

    html {
        height: ${props => props.height || "100%"};
        width: 100%;
        background: ${props => props.theme.colors.background};
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
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.primaryColor};

        & a {
          color: ${props => props.theme.colors.primaryColor};

          &:-webkit-any-link {
            text-decoration: none;
          }

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

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default Layout;

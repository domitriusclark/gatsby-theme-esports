import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useStaticQuery, graphql } from "gatsby";
import theme from "../theme";

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
        background: ${props =>
          props.background || props.theme.colors.background};
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
        color: ${props => props.color || props.theme.colors.primaryColor};

        & a {
          color: ${props => props.color || props.theme.colors.primaryColor};

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

const Layout = ({ children }) => {
  const { height } = useWindowDimensions();

  const { sitePlugin } = useStaticQuery(graphql`
    query NewPluginQuery {
      sitePlugin(name: { eq: "gatsby-theme-esports" }) {
        pluginOptions {
          colors {
            primaryColor
            background
            secondaryColor
          }
        }
      }
    }
  `);

  const pluginColors = sitePlugin.pluginOptions.colors;

  const device = theme.device;

  const themeWithUserConfig = {
    colors: { ...sitePlugin.pluginOptions.colors },
    ...device
  };

  return (
    <ThemeProvider
      theme={sitePlugin.pluginOptions.colors ? themeWithUserConfig : theme}
    >
      <Container>
        <GlobalStyle
          height={height}
          primaryColor={
            pluginColors ? pluginColors.background : theme.colors.background
          }
          color={
            pluginColors
              ? pluginColors.primaryColor
              : theme.colors.secondaryColor
          }
        />
        {children}
      </Container>
    </ThemeProvider>
  );
};

export default Layout;

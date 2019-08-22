import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import useWindowDimensions from "../hooks/useWindowDimensions";
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
          props.primaryColor || props.theme.colors.primaryColor};
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
    }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }) => {
  const { height, width } = useWindowDimensions();
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle height={height} />
        {children}
      </Container>
    </ThemeProvider>
  );
};

export default Layout;

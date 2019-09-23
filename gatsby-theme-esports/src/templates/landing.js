import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Header from "../components/header";
import logo from "../static/thievesLogo.png";

const StyledLanding = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & p {
    color: ${props => props.theme.colors.secondaryColor};
  }
`;

const Landing = () => {
  const { height } = useWindowDimensions();

  return (
    <Layout>
      <Header />
      <StyledLanding style={{ height: height }}>
        <img src={logo}></img>
      </StyledLanding>
    </Layout>
  );
};

export default Landing;

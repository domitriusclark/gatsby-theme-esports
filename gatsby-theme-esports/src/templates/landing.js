import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Header from "../components/header";

const StyledLanding = styled.div`
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
        <p>Hello there</p>
      </StyledLanding>
    </Layout>
  );
};

export default Landing;

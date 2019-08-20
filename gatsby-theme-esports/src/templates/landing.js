import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Header from "../components/header";

const StyledLanding = styled.div`
  background: white;
`;

const Landing = ({ location }) => {
  const { height, width } = useWindowDimensions();

  return (
    <Layout location={location}>
      <Header />
      <StyledLanding style={{ height: height }} />
    </Layout>
  );
};

export default Landing;

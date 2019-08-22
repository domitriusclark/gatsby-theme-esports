import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Header from "../components/header";

const StyledLanding = styled.div`
  background: white;
`;

const Landing = ({ pageContext }) => {
  const { height, width } = useWindowDimensions();
  console.log(pageContext);
  return (
    <Layout>
      <Header navLinks={pageContext.navLinks} />
      <StyledLanding style={{ height: height }} />
    </Layout>
  );
};

export default Landing;

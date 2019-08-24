import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Header from "../components/header";

const StyledAbout = styled.div`
  background: white;
`;

const About = ({ pageContext }) => {
  const { height } = useWindowDimensions();
  return (
    <Layout>
      <Header navLinks={pageContext.navLinks} />
      <StyledAbout style={{ height: height }} />
    </Layout>
  );
};

export default About;

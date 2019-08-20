import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Header from "../components/header";

const StyledAbout = styled.div`
  background: blue;
`;

const About = () => {
  const { height, width } = useWindowDimensions();
  return (
    <Layout>
      <Header />
      <StyledAbout style={{ height: height }} />
    </Layout>
  );
};

export default About;

import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";

const H1 = styled.h1`
  color: ${props => props.color || props.theme.colors.text};
  text-align: center;
`;

const Home = () => {
  return (
    <Layout>
      <H1>This is the home page</H1>
    </Layout>
  );
};

export default Home;

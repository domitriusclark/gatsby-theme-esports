import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Header from "../components/header";

const StyledTeam = styled.div``;

const Team = ({ pageContext }) => {
  const { height } = useWindowDimensions();
  return (
    <Layout>
      <Header navLinks={pageContext.navLinks} />
      <StyledTeam style={{ height: height }} />
    </Layout>
  );
};

export default Team;

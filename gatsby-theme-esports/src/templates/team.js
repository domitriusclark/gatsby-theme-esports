import React from "react";
import styled from "styled-components";
import useWindowDimensions from "../hooks/useWindowDimensions";

import Layout from "../components/layout";
import Header from "../components/header";
import Game from "../components/game";

const StyledTeam = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Team = ({ pageContext }) => {
  const { height } = useWindowDimensions();

  return (
    <Layout>
      <Header navLinks={pageContext.navLinks} />
      <StyledTeam style={{ height: height }}>
        <Game />
      </StyledTeam>
    </Layout>
  );
};

export default Team;

import React from "react";
import styled from "styled-components";
import useWindowDimensions from "../hooks/useWindowDimensions";

import Layout from "../components/layout";
import Header from "../components/header";
// import Game from "../components/game";
import PlayerCard from "../components/playerCard";

const StyledTeam = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Team = ({ pageContext }) => {
  const { height } = useWindowDimensions();

  return (
    <Layout>
      <Header navLinks={pageContext.navLinks} />
      <StyledTeam style={{ height: height }}>
        {/* <Game /> */}
        <PlayerCard />
      </StyledTeam>
    </Layout>
  );
};

export default Team;

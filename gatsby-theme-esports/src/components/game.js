import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import PlayerCard from "./playerCard";

const GAME_QUERY = graphql`
  {
    allData {
      edges {
        node {
          Games {
            icon
            name
          }
          Players {
            game
            name
            socials
            avatar
          }
        }
      }
    }
  }
`;

const Container = styled.div`
  display: flex;
`;

const GameImage = styled.div`
  border-radius: 0.5rem;
  background: ${props => `url(${props.icon})`};
  background-size: cover;
  display: flex;
  height: 200px;
  width: 200px;
`;

const Game = props => {
  const { allData } = useStaticQuery(GAME_QUERY);
  const [showPlayers, setShowPlayers] = React.useState(false);

  console.log(props);
  console.log(allData);

  const players = allData.edges[0].node.Players;
  const games = allData.edges[0].node.Games;

  const gamesCollection =
    games &&
    games.map(g => {
      return <GameImage icon={g.icon}></GameImage>;
    });

  return (
    <Container>
      {gamesCollection}
      {showPlayers && <PlayerCard></PlayerCard>}
    </Container>
  );
};

export default Game;

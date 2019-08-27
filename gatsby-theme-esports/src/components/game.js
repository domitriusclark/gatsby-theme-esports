import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

const GAME_QUERY = graphql`
  {
    allData {
      edges {
        node {
          Games {
            icon
          }
        }
      }
    }
  }
`;

const GameImage = styled.div`
  border-radius: 0.5rem;
  background: ${props => `url(${props.icon})`};
  background-size: cover;
  display: flex;
  height: 200px;
  width: 200px;
`;

const Game = () => {
  const { allData } = useStaticQuery(GAME_QUERY);

  const games = allData.edges[0].node.Games;

  const gamesCollection =
    games &&
    games.map(g => {
      return <GameImage icon={g.icon}></GameImage>;
    });

  return gamesCollection;
};

export default Game;

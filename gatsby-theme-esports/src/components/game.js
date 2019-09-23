import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import PlayerCard from "./playerCard";

const GAMES_QUERY = graphql`
  {
    takeshape {
      getGameList {
        items {
          name
          icon {
            path
          }
        }
      }
    }
  }
`;

const Game = props => {
  const [showPlayers, setShowPlayers] = React.useState(false);
  const data = useStaticQuery(GAMES_QUERY);

  console.log(data.takeshape.getGameList.items);

  return (
    <Container>
      {showPlayers && <PlayerCard></PlayerCard>}
      {data &&
        data.takeshape.getGameList.items.map(game => (
          <img src={`https://images.takeshape.io/${game.icon.path}`} />
        ))}
    </Container>
  );
};

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

export default Game;

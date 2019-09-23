// import React from "react";
// import styled from "styled-components";
// import { useStaticQuery, graphql } from "gatsby";

// const PLAYERS_QUERY = graphql`
//   {
//     sitePlugin(name: { eq: "gatsby-theme-esports" }) {
//       pluginOptions {
//         colors {
//           secondaryColor
//         }
//       }
//     }
//   }
// `;

// const StyledPlayerCard = styled.div`
//   border-radius: 0.5rem;
//   border: 1px solid white;
//   box-shadow: ${props =>
//     `10px 10px 2px 1px ${props.theme.colors.secondaryColor}`};
//   display: flex;
//   flex-direction: column;
//   flex: 1 auto auto;
//   height: auto;
//   width: auto;
//   color: black;
//   & a {
//     color: white;
//   }
// `;
// const PlayerAvatar = styled.div`
//   background: ${props => `url(${props.avatar})`};
//   background-size: cover;
//   height: 200px;
//   width: 200px;
// `;

// const Socials = styled.div``;

// const Game = () => {
//   return <p>Hello</p>;

//   // const playersCollection = players.map(p => {
//   //   return (
//   //     <StyledPlayerCard>
//   //       <PlayerAvatar avatar={p.avatar}>
//   //         <h1>{p.name}</h1>
//   //         <Socials>
//   //           <a href={p.twitter}>Twitter</a>
//   //           <a href={p.twitch}>Twitch</a>
//   //         </Socials>
//   //         '
//   //       </PlayerAvatar>
//   //     </StyledPlayerCard>
//   //   );
//   // });

//   return playersCollection;
// };

// export default Game;

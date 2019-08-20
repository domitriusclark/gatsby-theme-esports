import React from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Location } from "@reach/router";

const StyledHeader = styled.header`
  & ul {
    display: flex;
    justify-content: space-around;
    font-size: 4rem;
    list-style: none;
    & li {
      text-decoration: none;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Location>
        {props => {
          const { location } = props;
          return (
            <ul>
              <li>
                {location.origin === "/" ? (
                  <AniLink cover direction="right" duration=".8" to="/">
                    Home
                  </AniLink>
                ) : (
                  <AniLink cover direction="left" duration=".8" to="/">
                    Home
                  </AniLink>
                )}
              </li>
              <li>
                {location.origin === "/" ? (
                  <AniLink cover direction="right" duration=".8" to="/about">
                    About
                  </AniLink>
                ) : (
                  <AniLink cover direction="left" duration=".8" to="/about">
                    About
                  </AniLink>
                )}
              </li>
              <li>
                <AniLink cover direction="left" duration=".8" to="/team">
                  Team
                </AniLink>
              </li>
            </ul>
          );
        }}
      </Location>
      }
    </StyledHeader>
  );
};

export default Header;

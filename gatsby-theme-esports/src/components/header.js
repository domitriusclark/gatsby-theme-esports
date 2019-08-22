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

const Header = ({ navLinks }) => {
  const navigation =
    navLinks &&
    navLinks.map(link => {
      if (link === "Home") {
        return (
          <li>
            <AniLink cover direction="right" duration=".8" to="/">
              Home
            </AniLink>
          </li>
        );
      } else {
        return (
          <li>
            <AniLink
              cover
              direction="right"
              duration=".8"
              to={`/${link.toLowerCase()}`}
            >
              {link}
            </AniLink>
          </li>
        );
      }
    });
  return (
    <StyledHeader>
      <Location>
        {props => {
          return <ul>{navigation}</ul>;
        }}
      </Location>
      }
    </StyledHeader>
  );
};

export default Header;

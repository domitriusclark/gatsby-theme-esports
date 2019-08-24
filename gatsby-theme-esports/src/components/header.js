import React from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { useStaticQuery, graphql } from "gatsby";
// import { Location } from "@reach/router" <----- We will want this when we want to help decide the transition based on route

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
  const { sitePlugin } = useStaticQuery(graphql`
    query PluginQuery {
      sitePlugin(name: { eq: "gatsby-theme-esports" }) {
        pluginOptions {
          navLinks
        }
      }
    }
  `);
  const navLinks = sitePlugin.pluginOptions.navLinks;
  const navigation =
    navLinks &&
    navLinks.map(link => {
      return (
        <li key={link}>
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
    });
  return (
    <StyledHeader>
      <ul>
        <li>
          <AniLink cover direction="right" duration=".8" to="/">
            Home
          </AniLink>
        </li>
        {navigation}
      </ul>
      }
    </StyledHeader>
  );
};

export default Header;

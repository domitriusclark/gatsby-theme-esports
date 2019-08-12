import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  min-height: 20rem;
  border: 2px solid white;

  & ul {
    display: flex;
    justify-content: space-around;
    font-size: 4rem;
    list-style: none;
    & li {
    }
  }
`;

const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default Header;

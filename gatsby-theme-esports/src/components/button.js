import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: 2px solid ${props => props.theme.colors.borderColor};
  border-radius: 1.2rem;
  background: ${props =>
    props.secondary
      ? props.theme.colors.secondaryColor
      : props.theme.colors.primaryColor};
  color: ${props => props.theme.colors.text};
  padding: 1.5rem 4rem;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    background: ${props =>
      props.secondary
        ? props.theme.colors.primaryColor
        : props.theme.colors.secondaryColor};
  }
`;

const Button = ({ children, secondary, onClick }) => {
  return (
    <StyledButton onClick={onClick} secondary={secondary}>
      {children}
    </StyledButton>
  );
};

export default Button;

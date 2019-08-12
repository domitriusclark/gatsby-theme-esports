import React from "react";
import styled from "styled-components";

const Button = ({
  children,
  secondary,
  onClick,
  small,
  medium,
  large,
  fontSize,
  padding
}) => {
  return (
    <StyledButton
      onClick={onClick}
      secondary={secondary}
      small={small}
      medium={medium}
      large={large}
      padding={padding}
      fontSize={fontSize}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 0.8rem;
  background: ${props =>
    props.secondary
      ? props.theme.colors.secondaryColor
      : props.theme.colors.primaryColor};
  color: ${props => props.theme.colors.text};
  padding: ${props =>
    props.small
      ? `1rem 2rem`
      : props.medium
      ? `1.2rem 2.3rem`
      : props.large
      ? `1.5rem 2.5rem`
      : props.padding};
  font-size: ${props =>
    props.small
      ? `1.4rem`
      : props.medium
      ? `2rem `
      : props.large
      ? `2.5rem `
      : props.fontSize};
  cursor: pointer;

  &:hover {
    background: ${props =>
      props.secondary
        ? props.theme.colors.primaryColor
        : props.theme.colors.secondaryColor};
  }
`;

export default Button;

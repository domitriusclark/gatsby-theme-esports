import React from "react";
import Button from "./button";
import styled from "styled-components";

const Form = ({ children, padding }) => {
  const [values, setValues] = React.useState({});

  return (
    <StyledForm padding={padding}>
      {children &&
        children.length > 1 &&
        children.map(child => {
          return child.type === "input" ? (
            <input
              {...child.props}
              onChange={e =>
                setValues({
                  ...values,
                  [e.target.name]: e.target.value
                })
              }
            />
          ) : child.type === Button ? (
            child
          ) : null;
        })}
    </StyledForm>
  );
};

const StyledForm = styled.form`
  & input {
    border-radius: 0.3rem;
    border: 1px solid ${props => props.theme.colors.borderColor};
    padding: ${props => (props.padding ? props.padding : `1rem`)};
  }
`;

export default Form;

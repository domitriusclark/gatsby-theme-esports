import React from "react";
import Button from "./button";
import styled from "styled-components";

const Form = ({ children }) => {
  const [values, setValues] = React.useState({});

  console.log(values);

  return (
    <StyledForm>
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
    border-radius: 0.8rem;
    border: 1px solid ${props => props.theme.colors.borderColor};
    padding: 1rem;
  }
`;

export default Form;

import React from "react";
import Button from "./button";
import styled from "styled-components";

const StyledForm = styled.form`
  & input {
    border-radius: 0.8rem;
    border: 1px solid ${props => props.theme.colors.borderColor};
    padding: 1rem;
  }
`;

const Form = () => {
  const [input, setInput] = React.useState("");

  console.log(input);

  return (
    <StyledForm>
      <input onChange={e => setInput(e.target.value)} />
      <Button>Submit</Button>
    </StyledForm>
  );
};

export default Form;

import React from "react";
import styled from "styled-components";

const Container = styled.button`
  padding: 0.25em 5em;
  border-radius: 2em;
  color: ${(p) => p.theme.palette.primary.main.text};
  background-color: ${(p) => p.theme.palette.primary.main.bg};
`;

function SecondaryBtn({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

export default SecondaryBtn;

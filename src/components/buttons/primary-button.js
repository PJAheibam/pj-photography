import React from "react";
import styled from "styled-components";

const Container = styled.button`
  padding: 0.25em 1em;
  border-radius: 2em;
  font-weight: 500;
  border: 2px solid ${(p) => p.theme.palette.primary.main.bg};
  color: ${(p) => p.theme.palette.primary.main.text};
  background-color: ${(p) => p.theme.palette.primary.main.bg};
  &:hover {
    filter: brightness(0.95);
  }
`;

function PrimaryBtn({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

export default PrimaryBtn;

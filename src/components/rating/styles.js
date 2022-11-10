import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  font-size: 1.15rem;
  gap: 0.25em;
`;
export const Star = styled.button`
  font-size: inherit;
  color: hsl(50, 90%, 50%);
  &:hover {
    filter: drop-shadow(0 0 5px hsla(50, 90%, 50%, 0.5));
    scale: 1.05;
  }
  &:active {
    scale: 0.95;
  }
`;

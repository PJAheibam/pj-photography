import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: -270%;
  right: 0;
  overflow: hidden;
  border-radius: 0.25rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
  background-color: ${(p) => p.theme.palette.background.paper[3]};
`;

export const Item = styled.button`
  display: flex;
  width: 100%;
  color: ${(p) => p.theme.palette.text.primary};
  padding: 0.5em 1em;
  background-color: ${(p) => p.theme.palette.background.paper[3]};
  &:hover {
    filter: brightness(1.5);
  }
`;

export const Icon = styled.span`
  margin-right: 0.5rem;
`;

export const Label = styled.span`
  text-transform: capitalize;
`;

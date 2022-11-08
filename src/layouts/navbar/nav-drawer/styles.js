import styled from "styled-components";

export const Container = styled.aside`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  top: 72px;
  right: 0;
  width: clamp(250px, 35vw, 500px);
  /* width: 00px; */
  height: calc(100vh - 72px);
  padding: 1.5rem 2rem;
  padding-right: max(2rem, calc((100vw - 1280px) / 2));
  background-color: ${(p) => p.theme.palette.background.paper[2]};
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  z-index: 500;
`;

export const Heading = styled.h1`
  font-size: ${(p) => p.theme.fontSize.headline.lg};
  margin-bottom: 0.25em;
`;

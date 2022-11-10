import styled, { css } from "styled-components";

export const Heading = styled.h1`
  text-transform: capitalize;
  text-align: center;
`;

export const Block = styled.label`
  pointer-events: ${(p) => (p.readonly ? "none" : "all")};
`;

export const Label = styled.p`
  margin-bottom: 0.25em;
`;

export const TextField = styled.input.attrs((p) => ({
  autoComplete: "off",
}))`
  pointer-events: ${(p) => (p.readonly ? "none" : "all")};
  width: 100%;
  border: 2px solid
    ${(p) =>
      p.error ? p.theme.palette.error.main.bg : p.theme.palette.outline.main};
  background-color: transparent;
  color: ${(p) => p.theme.palette.text.primary};
  font-size: clamp(1rem, 4vw, 1.25rem);
  padding: 0.5em 1em;
  margin-bottom: 0.5em;
  border-radius: 0.25em;
  &:focus-visible {
    border: 2px solid ${(p) => p.theme.palette.tertiary.main.bg};
    outline-offset: 0px;
  }
`;

export const ErrorText = styled.p`
  ${(p) => css`
    width: 100%;
    font-size: 0.95rem;
    padding: 0.25em 0.75em;
    color: hsla(0, 70%, 70%);
    background-color: hsla(0, 20%, 20%);
  `}
`;

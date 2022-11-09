import { animated } from "react-spring";
import styled, { css } from "styled-components";
import { device } from "../../utils/device";

export const Main = styled.main`
  min-height: calc(100vh - 72px);
  @media ${device.sm} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Container = styled.article`
  position: relative;
`;

export const AnimationContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: ${(p) => p.theme.palette.background.paper[2]};
  /* position: absolute; */
`;

export const Heading = styled.h1`
  text-transform: capitalize;
  text-align: center;
`;

export const Block = styled.label``;
export const Label = styled.p`
  margin-bottom: 0.25em;
`;

export const TextField = styled.input.attrs((p) => ({
  autoComplete: "off",
}))`
  border: 2px solid ${(p) => p.theme.palette.outline.main};
  background-color: transparent;
  color: ${(p) => p.theme.palette.text.primary};
  font-size: clamp(1rem, 4vw, 1.25rem);
  padding: 0.25em 0.75em;
  border-radius: 0.25em;
  &:focus-visible {
    border: 2px solid ${(p) => p.theme.palette.tertiary.main.bg};
    outline-offset: 0px;
  }
`;

export const ErrorText = styled.p`
  ${(p) => css`
    display: inline-block;
    font-size: 0.95rem;
    padding: 0.25em 0.75em;
    color: hsla(0, 70%, 60%);
    background-color: hsla(0, 30%, 35%);
  `}
`;

export const Text = styled.p``;

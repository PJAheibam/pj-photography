import { animated } from "react-spring";
import styled, { css } from "styled-components";
import { device } from "../../utils/device";
import { Link } from "react-router-dom";

export const Main = styled.main`
  margin-top: 72px;
  min-height: calc(100vh - 72px);
  background-color: ${(p) => p.theme.palette.background.paper[2]};
  @media ${device.sm} {
    padding-block: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
  }
`;

export const Container = styled.article`
  position: relative;
  width: 100%;
  /* max-width: 500px; */
  @media ${device.sm} {
    width: 30%;
    min-width: 500px;
  }
`;

export const AnimationContainer = styled(animated.form)`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;
  border-radius: 1rem;
  width: 100%;
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
  width: 100%;
  border: 2px solid ${(p) => p.theme.palette.outline.main};
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

export const Text = styled.p`
  text-align: center;
`;

export const LinkButton = styled(Link)`
  color: ${(p) => p.theme.palette.primary.main.bg};
`;

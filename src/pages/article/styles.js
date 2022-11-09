import styled from "styled-components";
import { Section as Sec } from "../../components/containers";

export const Section = styled(Sec)``;

export const Heading = styled.h1``;

export const Title = styled.h2`
  font-size: clamp(1.25rem, 5vw, 2rem);
  margin-bottom: 0.5em;
`;

export const Text = styled.p`
  font-size: clamp(1rem, 3vw, 1.15rem);
  margin-bottom: 0.5em;
`;

import styled from "styled-components";
import { Section as Sec } from "../../components/containers";
import { device } from "../../utils/device";

export const Section = styled(Sec)``;

export const Header = styled(Sec)`
  padding: 0;
  width: 100vw;
  overflow: hidden;
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media ${device.xl} {
    width: 1280px;
    border-radius: 1rem;
    margin-top: 2rem;
  }
`;

export const Heading = styled.h1`
  font-size: clamp(1.25rem, 6vw, 1.75rem);
  margin-bottom: 0.5rem;
`;

export const Text = styled.p`
  margin-bottom: 2rem;
`;

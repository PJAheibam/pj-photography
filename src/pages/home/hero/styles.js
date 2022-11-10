import styled from "styled-components";
import { Section } from "../../../components/containers";
import maxWidth from "../../../styles/max-width";
import { device } from "../../../utils/device";

export const Container = styled(Section)`
  padding: 0;
  width: 100vw;
  overflow: hidden;
  @media ${device.xl} {
    border-radius: 1rem;
    margin-top: 2rem;
  }
`;

export const SlideItem = styled.div`
  padding: 2rem;
  height: clamp(300px, 70vh, 500px);
  ${maxWidth};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: clamp(300px, 70vw, 700px);
  @media ${device.sm} {
    align-items: flex-start;
  }
`;
export const Heading = styled.h1`
  text-align: center;
  font-size: ${(p) => `clamp(2rem, 5vw, ${p.theme.fontSize.display.lg})`};
  text-transform: capitalize;
  @media ${device.sm} {
    text-align: left;
  }
`;

export const SubHeading = styled.h2`
  text-align: center;
  font-size: ${(p) => `clamp(1.25rem, 3vw, ${p.theme.fontSize.headline.lg})`};
  @media ${device.sm} {
    text-align: left;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  font-size: clamp(1rem, 4vw, 1.25rem);
  margin-top: 2rem;
`;

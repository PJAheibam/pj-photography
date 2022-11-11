import styled from "styled-components";
import { Section as Sec } from "../../../components/containers";
import { device } from "../../../utils/device";

export const Container = styled(Sec)``;

export const Heading = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const SubHeading = styled.p`
  margin-inline: auto;
  max-width: 900px;
  text-align: center;
  font-size: 1.25rem;
`;

export const ImageContainer = styled.figure`
  flex-basis: 100%;
  width: 50%;
  height: 200px;
  overflow: hidden;
  border-radius: 1rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Title = styled.h1`
  /* text-align: center; */
  font-size: clamp(1.5rem, 5vw, 2rem);
`;
export const Text = styled.p`
  /* text-align: center; */
  font-size: clamp(1.25rem, 5vw, 1.5rem);
`;

export const Content = styled.div`
  flex-basis: 100%;
`;

export const Section = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media ${device.sm} {
    align-items: center;
    flex-direction: ${(p) => (p.reverse ? "row-reverse" : "row")};
    /* justify-content: flex-end; */
  }
`;

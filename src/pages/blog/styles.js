import styled from "styled-components";
import { Section as Sec } from "../../components/containers";
import { device } from "../../utils/device";
import { Link } from "react-router-dom";

export const Section = styled(Sec)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media ${device.sm} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.md} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Item = styled.div`
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: ${(p) => p.theme.palette.background.paper[4]};
`;

export const HeaderImageContainer = styled.figure`
  max-height: 300px;
`;

export const HeaderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 1.5rem;
  gap: 1rem;
`;

export const Title = styled.h1``;

export const Desc = styled.p``;

export const Hero = styled.div``;

export const Button = styled(Link)`
  display: block;
  width: fit-content;
  font-size: 1rem;
  padding: 0.2em 0.5em;
  margin-top: auto;
  border-radius: 1em;
  color: ${(p) => p.theme.palette.secondary.container.text};
  background-color: ${(p) => p.theme.palette.secondary.container.bg};
`;

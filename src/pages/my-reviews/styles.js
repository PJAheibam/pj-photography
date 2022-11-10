import styled from "styled-components";
import { Section as Sec } from "../../components/containers";
import { device } from "../../utils/device";

export const Section = styled(Sec)`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;

  @media ${device.sm} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.md} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Item = styled.div`
  padding: 0.75rem;
  display: flex;
  border-radius: 1rem;
  background-color: ${(p) => p.theme.palette.background.paper[2]};
  flex-direction: column;
`;

export const ItemHeader = styled.figure`
  aspect-ratio: 1;
  height: 250px;
  overflow: hidden;
  border-radius: 0.5rem;
`;

export const HeaderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Content = styled.div`
  /* height: 40%; */
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: clamp(1rem, 4vw, 1.25rem);
  margin-block: 0.25em;
`;

export const Desc = styled.p`
  margin-block: 0.25em;
`;

export const Buttons = styled.div`
  margin-top: auto;
  padding-top: 10px;
  display: flex;
  gap: 1rem;
`;

export const NoDataText = styled.p`
  font-size: 2rem;
`;

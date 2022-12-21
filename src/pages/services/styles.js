import styled from "styled-components";
import { Section as Sec } from "../../components/containers";
import { device } from "../../utils/device";

export const Items = styled(Sec)`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  gap: 1rem;
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
  overflow: hidden;
  border-radius: 0.5rem;
`;

export const HeaderImage = styled.img`
  aspect-ratio: 16/9;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Content = styled.div`
  /* height: 100%; */
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: clamp(1rem, 4vw, 1.25rem);
  margin-block: 0.25em;
  /* height: 3.75rem; */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Desc = styled.p`
  margin-block: 0.25em;
  margin-top: auto;
  font-size: 1rem;
  height: 4.75em;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Buttons = styled.div`
  margin-top: auto;
  padding-top: 10px;
  display: flex;
  gap: 1rem;
`;

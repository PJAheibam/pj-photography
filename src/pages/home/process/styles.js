import styled from "styled-components";
import { Section as Sec } from "../../../components/containers";
import { device } from "../../../utils/device";

export const Container = styled(Sec)``;

export const Section = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  @media ${device.sm} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.lg} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const Ball = styled.div`
  margin-bottom: 0.5rem;
  font-size: 2rem;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.25);
`;

export const Title = styled.h2`
  text-align: center;
`;

export const Text = styled.p`
  text-align: center;
`;

export const Item = styled.div``;

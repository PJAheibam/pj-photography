import styled from "styled-components";
import { Section } from "../../../components/containers";
import { device } from "../../../utils/device";

export const Container = styled(Section)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;
  background-color: rgba(0, 0, 0, 0.5);
  @media ${device.sm} {
    gap: 3rem;
    flex-direction: row;
    border-radius: 1rem;
  }
`;

export const Block = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  @media ${device.sm} {
    flex-direction: column;
  }
`;

export const Icon = styled.div`
  font-size: 1.5rem;
  @media ${device.sm} {
    font-size: 2.5rem;
  }
`;

export const Text = styled.h1``;

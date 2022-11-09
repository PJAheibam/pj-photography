import styled from "styled-components";
import { Section } from "../../components/containers";

export const Container = styled(Section)`
  background-color: hsla(147, 5%, 15%);
  padding-top: 2rem;
  padding-bottom: 1rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CopyRight = styled.p`
  margin-top: 1rem;
  text-align: center;
`;

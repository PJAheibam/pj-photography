import styled from "styled-components";
import maxWidth from "../../styles/max-width";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const Section = styled.article`
  padding: 2rem;
  ${maxWidth}
`;

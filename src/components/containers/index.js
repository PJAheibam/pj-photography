import styled from "styled-components";
import maxWidth from "../../styles/max-width";
import { device } from "../../utils/device";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 72px;
  min-height: calc(100vh - 72px);
  gap: 3rem;
`;

export const Section = styled.article`
  padding: 2rem;
  ${maxWidth}
  @media ${device.xl} {
    max-width: 1280px;
    padding-inline: 2rem;
    margin-inline: auto;
  }
`;

import styled from "styled-components";
import maxWidth from "../../styles/max-width";

export const AppBar = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem;
  ${maxWidth}
  box-shadow: 0 5px 5px rgba(0,0,0,0.25);
`;

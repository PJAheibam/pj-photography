import styled from "styled-components";
import maxWidth from "../../styles/max-width";

export const AppBar = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  ${maxWidth}
  box-shadow: 0 5px 5px rgba(0,0,0,0.25);
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: ${(p) => p.theme.palette.text.primary};
`;

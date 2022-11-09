import styled from "styled-components";
import maxWidth from "../../styles/max-width";

export const AppBar = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1rem;
  color: ${(p) => p.theme.palette.secondary.container.text};
  background-color: ${(p) => p.theme.palette.secondary.container.bg};
  /* flex-wrap: wrap; */
  ${maxWidth}
  z-index: 500;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25);
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

export const ToolBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const IconButton = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

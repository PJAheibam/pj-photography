import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const verticalStyles = css`
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

const horizontalStyles = css`
  gap: 1rem;
  align-items: center;
`;

export const Items = styled.nav`
  display: flex;
  ${(p) => (p.direction === "horizontal" ? horizontalStyles : verticalStyles)};
`;

export const Item = styled(Link)`
  text-transform: capitalize;
  color: ${(p) => p.theme.palette.text.secondary};
`;

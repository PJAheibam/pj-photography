import styled from "styled-components";
import { Link } from "react-router-dom";

export const Items = styled.nav`
  margin-left: auto;
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const Item = styled(Link)`
  text-transform: capitalize;
  color: ${(p) => p.theme.palette.text.secondary};
`;

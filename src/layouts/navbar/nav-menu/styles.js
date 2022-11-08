import styled from "styled-components";
import { Link } from "react-router-dom";

export const Items = styled.nav`
  display: flex;
  gap: 1rem;
`;

export const Item = styled(Link)`
  text-transform: capitalize;
  color: ${(p) => p.theme.palette.text.secondary};
`;

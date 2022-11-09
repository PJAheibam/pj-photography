import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/icons/logo.png";

const Container = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Text = styled.span`
  font-weight: bold;
  font-size: clamp(0.75rem, 5vw, 1.5rem);
  text-transform: uppercase;
  letter-spacing: 1px;
  color: white;
`;

function Logo({ style }) {
  return (
    <Container to="/" style={style}>
      <img height={40} src={logo} atl="PJ Photography" />
      <Text>PJ Photography</Text>
    </Container>
  );
}

export default Logo;

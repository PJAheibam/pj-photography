import React from "react";
import styled from "styled-components";
import PrimaryBtn from "../../components/buttons/primary-button";
import SecondaryBtn from "../../components/buttons/secondary-button";
import checked from "../../assets/icons/checked.png";
import { TiArrowForward as Forward, TiArrowBack as Back } from "react-icons/ti";
import { MdOutlineAddCircle as Add } from "react-icons/md";
import { Link } from "react-router-dom";

function Success({ handleReset, setSuccess }) {
  function handleBackClick() {
    handleReset();
    setSuccess(false);
  }
  return (
    <Container onClick={(e) => e.stopPropagation()}>
      <Content>
        <img
          src={checked}
          style={{
            margin: "2rem",
            width: "10%",
          }}
          alt="Checked Icon"
        />
        <Text>Service successfully added.</Text>
        <Buttons>
          <SecondaryBtn onClick={handleBackClick}>
            Add More <Add />
          </SecondaryBtn>
          <PrimaryBtn as={Link} to="/services">
            See All Services <Forward />
          </PrimaryBtn>
        </Buttons>
      </Content>
    </Container>
  );
}

export default Success;

const Container = styled.div`
  position: fixed;
  z-index: 600;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  min-height: 300px;
  min-width: 300px;
  width: 50%;
  border-radius: 1rem;
  background-color: ${(p) => p.theme.palette.background.paper[5]};
`;

export const Text = styled.p`
  text-align: center;
  font-size: clamp(1.25rem, 6vw, 2rem);
`;

export const Buttons = styled.div`
  width: 100%;
  padding-top: 0.75rem;
  margin-top: auto;
  border-top: 2px solid rgba(255, 255, 255, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

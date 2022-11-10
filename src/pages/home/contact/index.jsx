import React from "react";
//icons
import { FiPhoneCall as PhoneIcon } from "react-icons/fi";
import { HiOutlineLocationMarker as LocIcon } from "react-icons/hi";
import { FaUserClock as Clock } from "react-icons/fa";
import { Block, Container, Icon, Text } from "./styles";

function ContactSection() {
  return (
    <Container>
      <Block>
        <Icon>
          <PhoneIcon />
        </Icon>
        <Text>+8801712345678</Text>
      </Block>
      <Block>
        <Icon>
          <LocIcon />
        </Icon>
        <Text>Sylhet</Text>
      </Block>
      <Block>
        <Icon>
          <Clock />
        </Icon>
        <Text>24/7</Text>
      </Block>
    </Container>
  );
}

export default ContactSection;

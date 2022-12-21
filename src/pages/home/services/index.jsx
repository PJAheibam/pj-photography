import React, { useState, useEffect } from "react";
import {
  Container,
  Heading,
  SubHeading,
  Buttons,
  Content,
  Desc,
  HeaderImage,
  Item,
  ItemHeader,
  Items,
  Title,
} from "./styles";
import { shortText } from "../../../utils/short-text";
import PrimaryBtn from "../../../components/buttons/primary-button";
import { Link } from "react-router-dom";
import SecondaryBtn from "../../../components/buttons/secondary-button";
import Loading from "../../loading";
import useServices from "../../../hooks/use-services";

function ServicesSection() {
  const { data: services, isLoading } = useServices(3);

  if (isLoading) return <Loading />;
  return (
    <Container>
      <Heading>Feature Services</Heading>
      <SubHeading>
        PICTURESQUE THE CLASSIC KNOWLEDGE OF TRADITIONAL PHOTOGRAPHIC
        PORTRAITURE AND LIGHTING WITH AN INNOVATIVE AND CONTEMPORARY STYLE.
      </SubHeading>
      <Items>
        {services &&
          services.map((service) => (
            <Item key={service._id}>
              <ItemHeader>
                <HeaderImage src={service.image_url} alt="Service Thumbnail" />
              </ItemHeader>
              <Content>
                <Title>{service.name}</Title>
                <Desc>{shortText(service.desc)}</Desc>
              </Content>
              <Buttons>
                <PrimaryBtn as={Link} to={`/services/${service._id}`}>
                  Details
                </PrimaryBtn>
              </Buttons>
            </Item>
          ))}
      </Items>
      <SecondaryBtn
        style={{ width: "fit-content", marginInline: "auto" }}
        to="/services"
        as={Link}
      >
        View More
      </SecondaryBtn>
    </Container>
  );
}

export default ServicesSection;

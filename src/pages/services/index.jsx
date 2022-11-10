import React, { useEffect, useState } from "react";
import { Main } from "../../components/containers";
import {
  Buttons,
  Content,
  Desc,
  HeaderImage,
  Item,
  ItemHeader,
  Items,
  Title,
} from "./styles";
import { shortText } from "../../utils/short-text";
import PrimaryBtn from "../../components/buttons/primary-button";
import SecondaryBtn from "../../components/buttons/secondary-button";
import { Link } from "react-router-dom";

function Services() {
  const [services, setServices] = useState(null);
  const [loading, setLoading] = useState(true);

  // side effects
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/services`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <Main>
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
                <PrimaryBtn as={Link} to={service._id}>
                  Details
                </PrimaryBtn>
              </Buttons>
            </Item>
          ))}
      </Items>
    </Main>
  );
}

export default Services;

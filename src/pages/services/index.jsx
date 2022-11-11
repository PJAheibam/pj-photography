import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
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
import Loading from "../loading";
import useTitleChanger from "../../hooks/use-title";

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
  useTitleChanger("Services");

  if (loading) return <Loading />;
  return (
    <Main>
      <Items>
        <PhotoProvider>
          {services &&
            services.map((service) => (
              <Item key={service._id}>
                <ItemHeader>
                  <PhotoView src={service.image_url}>
                    <HeaderImage
                      src={service.image_url}
                      alt="Service Thumbnail"
                    />
                  </PhotoView>
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
        </PhotoProvider>
      </Items>
    </Main>
  );
}

export default Services;

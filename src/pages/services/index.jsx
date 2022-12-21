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
import useServices from "../../hooks/use-services";
import CardSkeleton from "./card-skeleton";
import Skeleton from "react-loading-skeleton";

function Services() {
  const { data: services, isLoading } = useServices();

  useTitleChanger("Services");

  return (
    <Main>
      <Items>
        <PhotoProvider>
          {isLoading &&
            [...Array(10).keys()].map((i) => <CardSkeleton key={i} />)}
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
                  <Desc>{service.desc}</Desc>
                </Content>
                <Buttons>
                  <SecondaryBtn
                    style={{
                      width: "100%",
                      justifyContent: "center",
                    }}
                    as={Link}
                    to={`/services/${service._id}`}
                  >
                    Details
                  </SecondaryBtn>
                </Buttons>
              </Item>
            ))}
        </PhotoProvider>
      </Items>
    </Main>
  );
}

export default Services;

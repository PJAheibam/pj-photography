import { useState, useEffect } from "react";
import {
  Container,
  Content,
  SlideItem,
  Heading,
  SubHeading,
  Buttons,
} from "./styles";
import Swiper from "react-id-swiper";
import PrimaryBtn from "../../../components/buttons/primary-button";
import SecondaryBtn from "../../../components/buttons/secondary-button";

function HeroSection() {
  const [services, setServices] = useState(null);

  const params = {
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      //   dynamicBullets: true,
    },
  };
  console.log(services);
  //    side  effects
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <Container>
      <Swiper {...params}>
        {services &&
          services.map((service, i) => (
            <SlideItem
              style={{ backgroundImage: `url(${service.image_url})` }}
              key={i}
            >
              <Content>
                <Heading> {service.name} </Heading>
                <SubHeading> {service.sub_heading} </SubHeading>
                <Buttons>
                  <PrimaryBtn style={{ fontSize: "1.5rem" }}>
                    Hire Me
                  </PrimaryBtn>
                  <SecondaryBtn style={{ fontSize: "1.5rem" }}>
                    More Services
                  </SecondaryBtn>
                </Buttons>
              </Content>
            </SlideItem>
          ))}
      </Swiper>
    </Container>
  );
}

export default HeroSection;

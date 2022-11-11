import { useState, useEffect } from "react";
import {
  Container,
  Content,
  SlideItem,
  Heading,
  SubHeading,
  Buttons,
} from "./styles";
// import Swiper from "react-id-swiper";
import PrimaryBtn from "../../../components/buttons/primary-button";
import SecondaryBtn from "../../../components/buttons/secondary-button";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";

function HeroSection() {
  // const [services, setServices] = useState(null);

  const params = {
    loop: true,

    spaceBetween: 30,
    grabCursor: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      clickable: true,
      dynamicBullets: true,
      //   dynamicBullets: true,
    },
  };
  //    side  effects
  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_SERVER_URL}/services?limit=3`)
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, []);

  return (
    <Container>
      <Swiper
        pagination={{
          clickable: true,
        }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        {services &&
          services.map((service, i) => (
            <SwiperSlide key={i}>
              <SlideItem
                style={{ backgroundImage: `url(${service.image_url})` }}
              >
                <Content>
                  <Heading> {service.name} </Heading>
                  <SubHeading> {service.sub_heading} </SubHeading>
                  <Buttons>
                    <PrimaryBtn>Hire Me</PrimaryBtn>
                    <SecondaryBtn as={Link} to="/services">
                      See Services
                    </SecondaryBtn>
                  </Buttons>
                </Content>
              </SlideItem>
            </SwiperSlide>
          ))}
      </Swiper>
      {/* <Swiper {...params}>
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
                  <PrimaryBtn>Hire Me</PrimaryBtn>
                  <SecondaryBtn>More Services</SecondaryBtn>
                </Buttons>
              </Content>
            </SlideItem>
          ))}
      </Swiper> */}
    </Container>
  );
}

export default HeroSection;

const services = [
  {
    name: "VERY PROFESSIONAL",
    sub_heading: "You get very professional result form my work",
    image_url:
      "https://i1.adis.ws/i/canon/pro-wedding-photography-tips-1_15be27d8daa944c882cf3138795812d4?$media-collection-full-dt$",
  },
  {
    name: "YEARS OF EXPERIENCE",
    sub_heading: "I will apply every bit of my experience to my work.",
    image_url:
      "https://i.ibb.co/ZSK47XG/Darrell-Fraser-Johannesburg-Wedding-Photographer-The-Garden-Venue-1.jpg",
  },
];

import React, { useState } from "react";
import Rating from "../../../components/rating";
import Swiper from "react-id-swiper";
import { Card, CardHeader, Name, HeaderContent, Text, Icon } from "./styles";
import user from "../../../assets/icons/user.png";

function Reviews({ reviews }) {
  const params = {
    slidesPerView: "auto",
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };
  if (reviews)
    return (
      <Swiper {...params}>
        {reviews.map((review, i) => (
          <Card key={i}>
            <CardHeader>
              <Icon>
                <img width={50} src={user} alt="avatar" />
              </Icon>
              <HeaderContent>
                <Name>{review?.name}</Name>
                <Rating value={review?.rating} readOnly />
              </HeaderContent>
            </CardHeader>
            <Text>{review?.text}</Text>
          </Card>
        ))}
      </Swiper>
    );

  return null;
}

export default Reviews;

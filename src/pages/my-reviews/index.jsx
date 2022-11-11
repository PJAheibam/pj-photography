import React, { useEffect, useState } from "react";
import { Main } from "../../components/containers";
import { useAuthContext } from "../../context/auth-contex";
import {
  Desc,
  HeaderImage,
  Item,
  ItemHeader,
  NoDataText,
  Section,
  Title,
} from "./styles";
import SecondaryBtn from "../../components/buttons/secondary-button";
import Rating from "../../components/rating";
import { Link } from "react-router-dom";
import Loading from "../loading";

function MyReviews() {
  const [myReviews, setMyReviews] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuthContext();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/services`)
      .then((res) => res.json())
      .then((data) => {
        if (typeof data === "object") {
          const r = data?.map((item) => {
            const found = item?.reviews?.find((rv) => rv?.uid === user?.uid);
            if (found !== undefined) {
              return {
                ...found,
                image_url: item?.image_url,
                service_name: item?.name,
                service_id: item?._id,
              };
            }
            return found;
          });
          setMyReviews(r.filter((item) => item !== undefined));
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  if (loading) return <Loading />;
  if (JSON.stringify(myReviews) === "[]")
    return (
      <Main
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NoDataText>You haven't give a review yet</NoDataText>
      </Main>
    );

  if (myReviews)
    return (
      <Main>
        <Section>
          {myReviews.map((review, i) => (
            <Item key={i}>
              <ItemHeader>
                <HeaderImage src={review.image_url} alt="thumbnail" />
              </ItemHeader>
              <Title>{review.service_name}</Title>
              <Rating value={review.rating} readOnly />
              <Desc>{review.text}</Desc>
              <SecondaryBtn
                style={{ width: "fit-content" }}
                as={Link}
                to={`/services/${review.service_id}`}
              >
                Edit
              </SecondaryBtn>
            </Item>
          ))}
        </Section>
      </Main>
    );
}

export default MyReviews;

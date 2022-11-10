import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Main } from "../../components/containers";
import { Heading, Section, Header, Text } from "./styles";
import PrimaryBtn from "../../components/buttons/primary-button";
import SecondaryBtn from "../../components/buttons/secondary-button";
import Reviews from "./reviews";
import { useAuthContext } from "../../context/auth-contex";
import ReviewForm from "./review-form";
// import useAuthContext from "../../context/auth-contex";

function ServiceDetails() {
  const { user } = useAuthContext();
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const myReview = service?.reviews?.find((data) => data?.uid === user?.uid);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`${process.env.REACT_APP_SERVER_URL}/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (!loading && service)
    return (
      <Main>
        <Header style={{ backgroundImage: `url(${service.image_url})` }} />
        <Section>
          <Heading>{service.name}</Heading>
          <Text>{service.desc}</Text>
          <PrimaryBtn>Book now</PrimaryBtn>
        </Section>
        <Section>
          <Reviews
            reviews={service?.reviews.filter((rv) => rv?.uid !== user?.uid)}
          />
          {!user && (
            <SecondaryBtn
              style={{ width: "fit-content", marginTop: "1rem" }}
              as={Link}
              to="/login"
            >
              Give Review
            </SecondaryBtn>
          )}
        </Section>
        {user && user?.uid && (
          <Section>
            <ReviewForm
              id={id}
              myReview={myReview}
              reviews={service?.reviews}
            />
          </Section>
        )}
      </Main>
    );

  return <Main>No service found</Main>;
}

export default ServiceDetails;

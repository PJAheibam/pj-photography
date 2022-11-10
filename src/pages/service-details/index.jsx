import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Main } from "../../components/containers";
import { Heading, Section, Header, Text } from "./styles";
import PrimaryBtn from "../../components/buttons/primary-button";
import SecondaryBtn from "../../components/buttons/secondary-button";
import Reviews from "./reviews";
import ReviewForm from "./review-form";
// import useAuthContext from "../../context/auth-contex";

function ServiceDetails() {
  // const { user, loading } = useAuthContext();
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (service)
    return (
      <Main>
        <Header style={{ backgroundImage: `url(${service.image_url})` }} />
        <Section>
          <Heading>{service.name}</Heading>
          <Text>{service.desc}</Text>
          <PrimaryBtn>Book now</PrimaryBtn>
        </Section>
        <Section>
          <Reviews />
          <ReviewForm />
        </Section>
      </Main>
    );

  return <Main>No service found</Main>;
}

export default ServiceDetails;

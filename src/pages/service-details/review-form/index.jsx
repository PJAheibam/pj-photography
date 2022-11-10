import React, { useState } from "react";
import { Heading } from "./styles";
import * as yup from "yup";
import { Container } from "./styles";
import { Block, Label, TextField, ErrorText } from "../../../components/form";
import { useFormik } from "formik";
import { useAuthContext } from "../../../context/auth-contex";
import Rating from "../../../components/rating";
import SecondaryBtn from "../../../components/buttons/secondary-button";

const schema = yup.object().shape({
  rating: yup.number().required("Required"),
  text: yup.string().min(3).required("Required!"),
});

function ReviewForm({ id }) {
  const { user } = useAuthContext();
  const [rating, setRating] = useState(0);

  const { values, errors, handleSubmit, handleBlur, handleChange, touched } =
    useFormik({
      initialValues: {
        rating,
        text: "",
      },
      onSubmit,
      validationSchema: schema,
    });

  function onSubmit(values, actions) {
    console.info(user);
    const data = {
      uid: user?.uid,
      name: user?.displayName,
      email: user?.email,
      text: values.text,
      rating: values.rating,
    };
    console.info(data);

    // fetch(`${process.env.REACT_APP_SERVER_URL}/services/${id}`, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: data,
    // });
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Heading>Rate this service</Heading>
      <Block style={{ width: "fit-content" }}>
        <Rating value={rating} setValue={setRating} />
      </Block>
      <Block>
        <Label>Describe Your Experience</Label>
        <TextField
          name="text"
          type="text"
          as="textarea"
          value={values.text}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.text && touched.text ? "true" : undefined}
        />
        {errors.text && touched.text && <ErrorText> {errors.text} </ErrorText>}
      </Block>
      <SecondaryBtn style={{ width: "fit-content" }} type="submit">
        Submit
      </SecondaryBtn>
    </Container>
  );
}

export default ReviewForm;

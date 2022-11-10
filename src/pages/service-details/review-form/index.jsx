import React, { useState } from "react";
import * as yup from "yup";
import { Container } from "./styles";
import { Block, Label, TextField, ErrorText } from "../../../components/form";
import { useFormik } from "formik";
import { useAuthContext } from "../../../context/auth-contex";
import Rating from "../../../components/rating";

function ReviewForm({ id }) {
  const { user } = useAuthContext();
  const [rating, setRating] = useState(0);

  const { values, errors, handleSubmit, handleBlur, handleChange, touched } =
    useFormik({
      initialValues: {
        rating: null,
        text: rating,
      },
      onSubmit,
      validationSchema: schema,
    });

  function onSubmit(values, actions) {
    const data = {
      uid: user?.uid,
      name: user?.displayName,
      email: user?.email,
      text: values.text,
      rating: values.rating,
    };

    fetch(`${process.env.REACT_APP_SERVER_URL}/services/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: data,
    });
  }

  return (
    <Container as="form" onSubmit={handleSubmit}>
      <Heading>Rate this service</Heading>
      <Block>
        <Rating value={rating} setValue={setRating} />
        <TextField
          style={{ display: "none" }}
          type="number"
          name="rating"
          value={values.rating}
        />
      </Block>
      <Block>
        <Label>Describe Your Experience</Label>
        <TextField
          name="text"
          as="textarea"
          value={values.text}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.text && touched.text ? "true" : undefined}
        />
        {errors.text && touched.text && <ErrorText> {errors.text} </ErrorText>}
      </Block>
    </Container>
  );
}

export default ReviewForm;

const schema = yup.object().shape({
  rating: yup.number.required("Required"),
  text: yup.string().min(3).required("Required!"),
});

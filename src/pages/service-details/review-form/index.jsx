import React, { useEffect, useState } from "react";
import { Footer, Heading } from "./styles";
import * as yup from "yup";
import { Container } from "./styles";
import { Block, Label, TextField, ErrorText } from "../../../components/form";
import { useFormik } from "formik";
import { useAuthContext } from "../../../context/auth-contex";
import Rating from "../../../components/rating";
import SecondaryBtn from "../../../components/buttons/secondary-button";
import PrimaryBtn from "../../../components/buttons/primary-button";
import { toast, ToastContainer } from "react-toastify";

const schema = yup.object().shape({
  text: yup.string().min(3).required("Required!"),
});

function ReviewForm({ id, reviews = [], myReview }) {
  const [error, setError] = useState(null);
  const { user } = useAuthContext();
  const [rating, setRating] = useState(0);
  const [readonly, setReadonly] = useState(false);

  const {
    values,
    errors,
    handleSubmit,
    handleBlur,
    handleChange,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      text: myReview?.text,
    },
    onSubmit,
    validationSchema: schema,
  });

  function onSubmit(values, actions) {
    if (!rating) {
      setError("Required");
      return;
    }

    const data = {
      uid: user?.uid,
      photoURL: user?.photoURL || "",
      name: user?.displayName,
      email: user?.email,
      text: values.text,
      date: new Date(),
      rating,
    };

    fetch(`${process.env.REACT_APP_SERVER_URL}/services/${id}?method=patch`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) setReadonly(true);
        console.log(data);
        toast.success("Review Added!");
      });
  }

  useEffect(() => {
    if (rating > 0) setError(null);
  }, [rating]);

  useEffect(() => {
    setReadonly(myReview ? true : false);
    setRating(myReview?.rating || null);
    setFieldValue("text", myReview?.text || "");
  }, [myReview]);

  return (
    <Container onSubmit={handleSubmit}>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Heading>{myReview ? "Your review" : "Rate this service"}</Heading>
      <div style={{ width: "fit-content" }}>
        <Rating readOnly={readonly} value={rating} setValue={setRating} />
        {error && <ErrorText>Required!</ErrorText>}
      </div>
      <Block readonly={readonly}>
        <Label>Describe Your Experience</Label>
        <TextField
          style={{
            fontFamily: "Poppins",
          }}
          readonly={readonly}
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
      <Footer>
        {!readonly && (
          <PrimaryBtn style={{ width: "fit-content" }} type="submit">
            {myReview ? "Save Changes" : "Submit"}
          </PrimaryBtn>
        )}
        {readonly && (
          <SecondaryBtn
            type="button"
            onClick={(e) => setReadonly((prev) => !prev)}
            style={{ width: "fit-content" }}
          >
            {" "}
            Edit Your Review
          </SecondaryBtn>
        )}
        {!readonly && myReview && (
          <SecondaryBtn
            type="button"
            onClick={(e) => setReadonly((prev) => !prev)}
            style={{ width: "fit-content" }}
          >
            {" "}
            Cancel Edit
          </SecondaryBtn>
        )}
      </Footer>
    </Container>
  );
}

export default ReviewForm;

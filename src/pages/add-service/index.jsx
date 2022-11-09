import React from "react";
import { Main } from "../../components/containers";
import { Loading, Section } from "./styles";
import {
  Block,
  Heading,
  Label,
  TextField,
  ErrorText,
} from "../../components/form";
import PrimaryBtn from "../../components/buttons/primary-button";
import { useFormik } from "formik";
import { serviceSchema } from "../../schemas/service-form";
import ReactLoading from "react-loading";

function AddService() {
  const btnStyle = {
    marginTop: "1rem",
  };

  const {
    values,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: "",
      sub_heading: "",
      photo_url: "",
      desc: "",
    },
    onSubmit,
    validationSchema: serviceSchema,
  });

  function onSubmit(values, actions) {}

  if (isSubmitting)
    return (
      <Main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ReactLoading type="spinningBubbles" />
        <Loading>Submitting...</Loading>
      </Main>
    );
  return (
    <Main>
      <Section as="form" onSubmit={handleSubmit}>
        <Heading>Add Service</Heading>
        <Block>
          <Label>Service Name</Label>
          <TextField
            name="name"
            placeholder="What type of service?"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name && touched.name ? "true" : undefined}
          />
          {errors.name && touched.name && (
            <ErrorText> {errors.name} </ErrorText>
          )}
        </Block>
        <Block>
          <Label>Photo URL</Label>
          <TextField
            name="photo_url"
            placeholder="What type of service?"
            value={values.photo_url}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.photo_url && touched.photo_url ? "true" : undefined}
          />
          {errors.photo_url && touched.photo_url && (
            <ErrorText> {errors.photo_url} </ErrorText>
          )}
        </Block>
        <Block>
          <Label>Sub Heading</Label>
          <TextField
            name="sub_heading"
            placeholder="What type of service?"
            value={values.sub_heading}
            onChange={handleChange}
            onBlur={handleBlur}
            error={
              errors.sub_heading && touched.sub_heading ? "true" : undefined
            }
          />
          {errors.sub_heading && touched.sub_heading && (
            <ErrorText> {errors.sub_heading} </ErrorText>
          )}
        </Block>
        <Block>
          <Label>Description</Label>
          <TextField
            style={{ resize: "vertical", fontFamily: "Poppins" }}
            as="textarea"
            type="tex"
            name="desc"
            placeholder="What type of service?"
            value={values.desc}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.desc && touched.desc ? "true" : undefined}
          />
          {errors.desc && touched.desc && (
            <ErrorText> {errors.desc} </ErrorText>
          )}
        </Block>
        <PrimaryBtn style={btnStyle} type="submit">
          Add Service
        </PrimaryBtn>
      </Section>
    </Main>
  );
}

export default AddService;

"use client";

import { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSearchParams, useRouter } from 'next/navigation';
import BoxLink from "../components/box-link"; // GLOBAL CUSTOM COMPONENTS

import { H3 } from "../../../components/Typography";
import { FlexRowCenter } from "../../../components/flex-box";

const ResetPassword = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const router = useRouter();
  const [message, setMessage] = useState("");

  // FORM FIELD INITIAL VALUE
  const initialValues = {
    password: "",
    confirmPassword: ""
  };

  // FORM FIELD VALIDATION SCHEMA
  const validationSchema = yup.object().shape({
    password: yup.string().required("Password is required"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required("Confirm password is required")
  });

  const onSubmit = async (values) => {
    const body = {
      newPassword: values.password,
      token: token,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/reset-password`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        }
      );

      if (response.ok) {
        const data = await response.json();
        alert(data?.message);
        router.push('/');

      } else {
        const errorData = await response.json();
        console.error('Failed:', errorData);
        alert('Failed!');
      }
    } catch (error) {
      console.error('Error during reset password:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      if (values.password !== values.confirmPassword) {
        alert("Passwords do not match");
        setSubmitting(false);
        return;
      }
      onSubmit(values);
    },
  });

  return (
    <Fragment>
      <H3 mb={3} textAlign="center">
        Reset your password
      </H3>

      {/* FORM AREA */}
      <Box onSubmit={handleSubmit} component="form" display="flex" flexDirection="column" gap={2}>
        <TextField
          fullWidth
          name="password"
          type="password"
          label="New password"
          onBlur={handleBlur}
          value={values.password}
          onChange={handleChange}
          helperText={touched.password && errors.password}
          error={Boolean(touched.password && errors.password)}
        />
        <TextField
          fullWidth
          name="confirmPassword"
          type="password"
          label="Retype new password"
          onBlur={handleBlur}
          value={values.confirmPassword}
          onChange={handleChange}
          helperText={touched.confirmPassword && errors.confirmPassword}
          error={Boolean(touched.confirmPassword && errors.confirmPassword)}
        />

        <Button fullWidth type="submit" color="primary" variant="contained">
          Reset
        </Button>
      </Box>

      {/* BOTTOM LINK AREA */}
      <FlexRowCenter mt={3} justifyContent="center" gap={1}>
        Don&apos;t have an account?
        <BoxLink title="Register" href="/register" />
      </FlexRowCenter>

      {message && <p>{message}</p>}
    </Fragment>
  );
};

export default ResetPassword;

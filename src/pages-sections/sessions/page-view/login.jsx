"use client";

import * as React from 'react';
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import EyeToggleButton from "../components/eye-toggle-button";
import usePasswordVisible from "../use-password-visible";
import BazaarTextField from "../../../components/BazaarTextField";
import { useAuth } from '../../../contexts/AuthContext'; // Adjust the path as needed
import { useRouter } from "next/navigation";

// ==============================================================
const LoginPageView = ({ closeDialog, setSnackbarOpen }) => {
  const { login } = useAuth();
  const { visiblePassword, togglePasswordVisible } = usePasswordVisible();
  const router = useRouter();

  // LOGIN FORM FIELDS INITIAL VALUES
  const initialValues = {
    email: "",
    password: ""
  };

  // LOGIN FORM FIELD VALIDATION SCHEMA
  const validationSchema = yup.object().shape({
    password: yup.string().required("Password is required"),
    email: yup.string().email("invalid email").required("Email is required")
  });

  const onSubmit = async (values) => {
    const body = {
      email: values.email,
      password: values.password,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        }
      );

      if (response.ok) {
        // API call succeeded
        const data = await response.json();
        setSnackbarOpen(true);
        closeDialog?.();
        login();

        // Redirect based on the user role
        if (data.user.role === 'seller') {
          router.push('/vendor/dashboard');
        } else {
          router.push('/marketplace');
        }
      } else {
        // API call failed
        const errorData = await response.json();
        console.error('Login failed:', errorData);
        alert('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during Login:', error);
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
    onSubmit
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <BazaarTextField
          mb={1.5}
          fullWidth
          name="email"
          size="small"
          type="email"
          variant="outlined"
          onBlur={handleBlur}
          value={values.email}
          onChange={handleChange}
          label="Email or Phone Number"
          placeholder="example@mail.com"
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
        />
        <BazaarTextField
          mb={2}
          fullWidth
          size="small"
          name="password"
          label="Password"
          autoComplete="on"
          variant="outlined"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
          placeholder="*********"
          type={visiblePassword ? "text" : "password"}
          error={!!touched.password && !!errors.password}
          helperText={touched.password && errors.password}
          InputProps={{
            endAdornment: <EyeToggleButton show={visiblePassword} click={togglePasswordVisible} />
          }}
        />
        <Button fullWidth type="submit" color="primary" variant="contained" size="large">
          Login
        </Button>
      </form>
    </>
  );
};

export default LoginPageView;

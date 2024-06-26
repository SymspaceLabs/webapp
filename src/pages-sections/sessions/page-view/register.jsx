"use client";

import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useFormik } from "formik";
import * as yup from "yup"; // LOCAL CUSTOM COMPONENTS
import Box from "@mui/material/Box";

import EyeToggleButton from "../components/eye-toggle-button"; // LOCAL CUSTOM HOOK

import BoxLink from "../components/box-link";
import usePasswordVisible from "../use-password-visible"; // GLOBAL CUSTOM COMPONENTS

import { Span } from "../../../components/Typography";
import { FlexBox } from "../../../components/flex-box";
import BazaarTextField from "../../../components/BazaarTextField";

import { FlexRowCenter } from "../../../components/flex-box"; // ==============================================================

const RegisterPageView = () => {
  const {
    visiblePassword,
    togglePasswordVisible
  } = usePasswordVisible(); // COMMON INPUT PROPS FOR TEXT FIELD

  const inputProps = {
    endAdornment: <EyeToggleButton show={visiblePassword} click={togglePasswordVisible} />
  }; // REGISTER FORM FIELDS INITIAL VALUES

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    re_password: "",
    agreement: false
  }; // REGISTER FORM FIELD VALIDATION SCHEMA

  const validationSchema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
    re_password: yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("Please re-type password"),
    agreement: yup.bool().test("agreement", "You have to agree with our Terms and Conditions!", value => value === true).required("You have to agree with our Terms and Conditions!")
  });

  const onSubmit = async (values) => {
    console.log(values)

    const body ={
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    }
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup`,
        // 'http://154.53.63.170:3000/auth/signup',
        {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
  
      if (response.ok) {
        // API call succeeded
        const data = await response.json();
        console.log(data);
        alert('Signup successful!');
      } else {
        // API call failed
        const errorData = await response.json();
        console.error('Signup failed:', errorData);
        alert('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
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
  return <form onSubmit={handleSubmit}>
    <Box sx={{px:0, display:"flex", justifyContent: "space-between", gap:1}}>
      <BazaarTextField mb={1.5} fullWidth name="firstName" size="small" label="First Name" variant="outlined" onBlur={handleBlur} value={values.firstName} onChange={handleChange} placeholder="Ralph Awards" error={!!touched.name && !!errors.name} helperText={touched.firstName && errors.firstName} />

      <BazaarTextField mb={1.5} fullWidth name="lastName" size="small" label="Last Name" variant="outlined" onBlur={handleBlur} value={values.lastName} onChange={handleChange} placeholder="Ralph Awards" error={!!touched.lastName && !!errors.lastName} helperText={touched.lastName && errors.lastName} />
    </Box>


      <BazaarTextField mb={1.5} fullWidth name="email" size="small" type="email" variant="outlined" onBlur={handleBlur} value={values.email} onChange={handleChange} label="Email" placeholder="exmple@mail.com" error={!!touched.email && !!errors.email} helperText={touched.email && errors.email} />

      <BazaarTextField mb={1.5} fullWidth size="small" name="password" label="Password" variant="outlined" autoComplete="on" placeholder="*********" onBlur={handleBlur} onChange={handleChange} value={values.password} type={visiblePassword ? "text" : "password"} error={!!touched.password && !!errors.password} helperText={touched.password && errors.password} InputProps={inputProps} />

      <BazaarTextField fullWidth size="small" autoComplete="on" name="re_password" variant="outlined" label="Retype Password" placeholder="*********" onBlur={handleBlur} onChange={handleChange} value={values.re_password} type={visiblePassword ? "text" : "password"} error={!!touched.re_password && !!errors.re_password} helperText={touched.re_password && errors.re_password} InputProps={inputProps} />

      <FormControlLabel name="agreement" className="agreement" onChange={handleChange} control={<Checkbox size="small" color="secondary" checked={values.agreement || false} />} label={<FlexBox flexWrap="wrap" alignItems="center" justifyContent="flex-start" gap={1}>
            <Span display={{
        sm: "inline-block",
        xs: "none"
      }}>By signing up, you agree to</Span>
            <Span display={{
        sm: "none",
        xs: "inline-block"
      }}>Accept Our</Span>
            <BoxLink title="Terms & Condition" href="/" />
          </FlexBox>} />

      <Button fullWidth type="submit" color="primary" variant="contained" size="large">
        Create Account
      </Button>
    </form>;
};

export default RegisterPageView;
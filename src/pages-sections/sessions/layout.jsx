"use client";

import { usePathname } from "next/navigation"; // LOCAL CUSTOM COMPONENTS
import Button from "@mui/material/Button";
import BoxLink from "./components/box-link";
import LogoWithTitle from "./components/logo-title";
import LoginBottom from "./components/login-bottom";
import SocialButtons from "./components/social-buttons"; // GLOBAL CUSTOM COMPONENTS
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider"; // CUSTOM COMPONENTS
import { Span } from "../../components/Typography"; // IMPORT IMAGES

import { FlexRowCenter } from "../../components/flex-box"; // COMMON STYLED COMPONENT

import { Wrapper } from "./styles";
export default function AuthLayout({
  children
}) {
  const pathname = usePathname();
  let BOTTOM_CONTENT = null;

  if (pathname === "/login") {
    BOTTOM_CONTENT = <LoginBottom />;
  }


  if (pathname === "/register") {
    BOTTOM_CONTENT = <FlexRowCenter sx={{color:'#fff', flexDirection:'column'}} gap={1} mt={3}>
        <Box my={3}>
          <Divider>
            <Span lineHeight={1} px={1} sx={{color:'#fff'}}>
              or
            </Span>
          </Divider>
        </Box>
        <Button href="/register-partner" fullWidth size="large" sx={{ fontFamily: 'Helvetica', fontWeight: 700, fontSize: '22px', backdropFilter: 'blur(50px)', borderRadius:'12px', py:2, background: 'linear-gradient(225deg, #18C8FF 14.89%, #933FFE 85.85%)', fontSize: 22, boxShadow: "0px 8px 6px rgba(0, 0, 0, 0.05), inset 0px -1px 1px rgba(255, 255, 255, 0.5), inset 2px 3px 3px -3px rgba(255, 255, 255, 0.6), inset 0px -1px 1px rgba(255, 255, 255, 0.25), inset 0px 1px 1px rgba(255, 255, 255, 0.25)" }} >
          Create a business profile
        </Button>
        <Box sx={{pt:2, pb:5}}>
          Already have an account? <BoxLink title="Sign in" href="/login" />
        </Box>
      </FlexRowCenter>;
  }

  if (pathname === "/register-partner") {
    BOTTOM_CONTENT = <FlexRowCenter sx={{color:'#fff', flexDirection:'column'}} gap={1} mt={3}>
        <Box my={3}>
          <Divider>
            <Span lineHeight={1} px={1} sx={{color:'#fff'}}>
              or
            </Span>
          </Divider>
        </Box>
        <Box sx={{pt:2, pb:5}}>
          Already have an account? <BoxLink title="Sign in" href="/login" />
        </Box>
      </FlexRowCenter>;
  }


  if (pathname === "/reset-password") {
    return <FlexRowCenter flexDirection="column" minHeight="100vh" px={2}>
        <Wrapper elevation={3}>{children}</Wrapper>
      </FlexRowCenter>;
  }

  return <FlexRowCenter sx={{background:'#1F1F1F'}} flexDirection="column" minHeight="100vh" px={2}>
      {/* <Box sx={{background:'rgba(3, 102, 254, 0.8); opacity: 0.8; box-shadow: 0px 8px 6px rgba(0, 0, 0, 0.05), inset 0px -1px 1px rgba(255, 255, 255, 0.5), inset 2px 3px 3px -3px rgba(255, 255, 255, 0.6), inset 0px -1px 1px rgba(255, 255, 255, 0.25), inset 0px 1px 1px rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(50px)'}}> */}
        <Wrapper sx={{borderRadius:'25px', background:'linear-gradient(0deg, rgba(140, 140, 140, 0.3), rgba(140, 140, 140, 0.3)), rgba(255, 255, 255, 0.1);'}} elevation={3}>
          <LogoWithTitle />
          {children}
          <SocialButtons />
          {BOTTOM_CONTENT}
        </Wrapper>
      {/* </Box> */}

    </FlexRowCenter>;
}
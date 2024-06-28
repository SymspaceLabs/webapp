"use client";

import { usePathname } from "next/navigation"; // LOCAL CUSTOM COMPONENTS
import Button from "@mui/material/Button";
import BoxLink from "./components/box-link";
import LogoWithTitle from "./components/logo-title";
import LoginBottom from "./components/login-bottom";
import SocialButtons from "./components/social-buttons"; // GLOBAL CUSTOM COMPONENTS
import Box from "@mui/material/Box";

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
        <Box>
          Already have an account? <BoxLink title="Login" href="/login" />
        </Box>
        <Button href="/seller.symspacelabs.com" fullWidth size="large" className="facebookButton" sx={{ background: 'linear-gradient(225deg, #18C8FF 14.89%, #933FFE 85.85%)', opacity: 0.8, boxShadow: '0px 8px 6px rgba(0, 0, 0, 0.05), inset 0px -1px 1px rgba(255, 255, 255, 0.5), inset 2px 3px 3px -3px rgba(255, 255, 255, 0.6), inset 0px -1px 1px rgba(255, 255, 255, 0.25), inset 0px 1px 1px rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(50px)', fontSize: 12 }} >
            Create a business profile
          </Button>
        
      </FlexRowCenter>;
  }


  if (pathname === "/reset-password") {
    return <FlexRowCenter flexDirection="column" minHeight="100vh" px={2}>
        <Wrapper elevation={3}>{children}</Wrapper>
      </FlexRowCenter>;
  }

  return <FlexRowCenter sx={{background:'#1F1F1F'}} flexDirection="column" minHeight="100vh" px={2}>
      <Wrapper elevation={3}>
        <LogoWithTitle />
        {children}
        <SocialButtons />
        {BOTTOM_CONTENT}
      </Wrapper>
    </FlexRowCenter>;
}
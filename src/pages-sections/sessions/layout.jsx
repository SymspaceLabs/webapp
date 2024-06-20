"use client";

import { usePathname } from "next/navigation"; // LOCAL CUSTOM COMPONENTS

import BoxLink from "./components/box-link";
import LogoWithTitle from "./components/logo-title";
import LoginBottom from "./components/login-bottom";
import SocialButtons from "./components/social-buttons"; // GLOBAL CUSTOM COMPONENTS

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
    BOTTOM_CONTENT = <FlexRowCenter sx={{color:'#fff'}} gap={1} mt={3}>
        Already have an account?
        <BoxLink title="Login" href="/login" />
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
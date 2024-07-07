"use client";

import { useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import { Fragment } from "react";
import Dialog from "@mui/material/Dialog";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery"; // LOGIN FORM

import { LoginPageView } from "../../../pages-sections/sessions/page-view"; // GLOBAL CUSTOM COMPONENTS

import { MiniCart } from "../../../components/mini-cart"; // LOGIN PAGE SECTIONS
import { Box } from '@mui/material';

import { Wrapper } from "../../../pages-sections/sessions/styles";
import LogoWithTitle from "../../../pages-sections/sessions/components/logo-title";
import LoginBottom from "../../../pages-sections/sessions/components/login-bottom";
import SocialButtons from "../../../pages-sections/sessions/components/social-buttons"; // ==============================================================

// ==============================================================
export default function DialogDrawer(props) {
  const { dialogOpen, sidenavOpen, toggleDialog, toggleSidenav } = props;
  const isMobile = useMediaQuery(theme => theme.breakpoints.down("xs"));

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  return (
    <Fragment>
      <Dialog PaperProps={{ style: { backgroundColor: 'transparent', boxShadow: 'none', borderRadius: '80px', boxShadow: '0px 8px 6px rgba(0, 0, 0, 0.05), inset 2px 3px 3px -3px rgba(255, 255, 255, 0.6), inset 0px -1px 1px rgba(255, 255, 255, 0.25), inset 0px 1px 1px rgba(255, 255, 255, 0.25)' },}} scroll="body" open={dialogOpen} fullWidth={isMobile} onClose={toggleDialog} sx={{ zIndex: 9999 }}>
        <Box sx={{ background: 'rgba(188, 188, 188, 0.2)', backdropFilter: 'blur(50px)',  }}>
          <Box sx={{backgroundImage: "url('/assets/images/background/Rectangle.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', mixBlendMode: 'overlay',  }}>
          <Wrapper>
            <LogoWithTitle />
            <LoginPageView closeDialog={toggleDialog} setSnackbarOpen={setSnackbarOpen} />
            <SocialButtons />
            <LoginBottom />
          </Wrapper>
          </Box>
        </Box>
      </Dialog>

      <Drawer open={sidenavOpen} anchor="right" onClose={toggleSidenav} sx={{ zIndex: 9999 }}>
        <MiniCart toggleSidenav={toggleSidenav} />
      </Drawer>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
          Login Successful!
        </Alert>
      </Snackbar>
    </Fragment>
  );
}

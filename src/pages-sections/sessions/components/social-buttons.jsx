import { Fragment } from "react";
import Image from "next/image"; // MUI

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider"; // CUSTOM COMPONENTS

import { Span } from "../../../components/Typography"; // IMPORT IMAGES

import googleLogo from "../../../../public/assets/images/icons/google-1.svg";
import facebookLogo from "../../../../public/assets/images/icons/facebook-filled-white.svg"; // =======================================
import githubLogo from "../../../../public/assets/images/icons/github-white.svg"; // =======================================

// =======================================
export default function SocialButtons(props) {
  return <Fragment>
      {
      /* DIVIDER */
    }
      <Box my={3}>
        <Divider>
          <Span lineHeight={1} px={1}>
            or
          </Span>
        </Divider>
      </Box>

      {
      /* FACEBOOK BUTTON */
    }
      <Button fullWidth size="large" className="facebookButton" sx={{
      fontSize: 12
    }} startIcon={<Image alt="facebook" src={facebookLogo} />}>
        Continue with Facebook
      </Button>

      {
      /* GOOGLE BUTTON */
    }
      <Button fullWidth size="large" className="googleButton" sx={{ fontSize: 12 }} startIcon={<Image alt="google" src={googleLogo} />}>
        Continue with Google
      </Button>

      <Button onClick={()=>onLogin("github")} fullWidth size="large" className="githubButton" sx={{ fontSize: 12 }} startIcon={<Image alt="github" src={githubLogo} />}>
        Continue with Github
      </Button>

      {
        /* APPLE BUTTON */
      }
      <Button onClick={()=>onLogin("apple")} fullWidth size="large" className="googleButton" sx={{ fontSize: 12 }} startIcon={<Image alt="apple" src={googleLogo} />}>
        Continue with Apple
      </Button>
    </Fragment>;
}
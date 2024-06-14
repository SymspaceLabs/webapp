import Card from "@mui/material/Card";
import styled from "@mui/material/styles/styled";
const fbStyle = {
  background: "#3B5998",
  color: "white"
};
const googleStyle = {
  background: "#4285F4",
  color: "white"
};
const githubStyle = {
  background: "#24292e",
  color: "white"
};
export const Wrapper = styled(Card)(({
  theme
}) => ({
  width: 500,
  padding: "2rem 3rem",
  [theme.breakpoints.down("sm")]: {
    width: "100%"
  },
  ".facebookButton": {
    marginBottom: 10,
    ...fbStyle,
    "&:hover": fbStyle
  },
  ".googleButton": { 
    marginBottom: 10,
    ...googleStyle,
    "&:hover": googleStyle
  },
  ".githubButton": { 
    marginBottom: 10,
    ...githubStyle,
    "&:hover": githubStyle
  },
  ".agreement": {
    marginTop: 12,
    marginBottom: 24
  }
}));
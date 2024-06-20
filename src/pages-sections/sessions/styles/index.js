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
export const Wrapper = styled(Card)(({
  theme
}) => ({
  width: 500,
  padding: "2rem 3rem",
  background: 'rgba(188, 188, 188, 0.1)',
  boxShadow: '0px 8px 6px rgba(0, 0, 0, 0.05), inset 2px 3px 3px -3px rgba(255, 255, 255, 0.6), inset 0px -1px 1px rgba(255, 255, 255, 0.25), inset 0px 1px 1px rgba(255, 255, 255, 0.25)',
  backdropFilter: 'blur(50px)', // Note: backdrop-filter has minimal browser support
  borderRadius: '80px',
  borderRadius:'80px',
  [theme.breakpoints.down("sm")]: {
    width: "100%"
  },
  ".facebookButton": {
    marginBottom: 10,
    ...fbStyle,
    "&:hover": fbStyle
  },
  ".googleButton": { ...googleStyle,
    "&:hover": googleStyle
  },
  ".agreement": {
    marginTop: 12,
    marginBottom: 24
  }
}));
// import Container from "@mui/material/Container"; // GLOBAL CUSTOM COMPONENTS

// import LazyImage from "../../../components/LazyImage";
// import { H2, Paragraph } from "../../../components/Typography";
// import SubscribeInput from "../../../components/subscribe-input"; // STYLED COMPONENT

// import { RootStyle } from "./styles"; // IMPORT IMAGES
import { Box, Container, Typography, Button, Grid } from '@mui/material';

// import bgImage from "../../../../public/assets/images/banners/banner-37.jpg";
export default function Section8() {
  return (
    <Grid sx={{background:'#EDEDED', py:10}}>
      <Container>
        <Box sx={{ textAlign: 'center', py: 8, display:'flex', flexDirection:'column', gap:5, alignItems:'center' }}>
          <Typography sx={{ fontFamily:'Helvetica', color:'#4E4E4E', fontSize: 72, fontWeight:'bold' }} >
            SYM-AI
          </Typography>
          <Typography sx={{ fontFamily:'Helvetica', color:'#909090', fontSize: 16, textAlign:'justify', maxWidth: 900  }}>
            Symspace's Generative AI 3D modeling SaaS serves as a collaborative platform, facilitating communication and feedback between brands and our team. This ensures that the generated 3D models align with the brand's vision and requirements, fostering a productive partnership. Brands can request custom 3D models based on their specific requirements, such as adding branding elements, adjusting colors or materials, and exploring different variations of the product. Distinct size measurements can also be requested. This adaptability allows brands to showcase their products in a unique and tailored manner. We have streamlined the entire 3D modeling process, from requesting models to receiving the final outputs. This efficient workflow saves time and resources for brands, enabling them to focus on their core business activities. This 3D Product shirt is used in our AR Marketplace for consumers to view in our AR Trial Room experience.          </Typography>
          <Box>
            <Button variant="contained" color="primary" sx={{  fontFamily:'Helvetica', color:'#fff', borderRadius:'50px', py:2, px:7.5, background:'linear-gradient(225deg, #18C8FF 14.89%, #933FFE 85.85%)' }}>
              Learn More
            </Button>
          </Box>
        </Box>
      </Container>
    </Grid>
  );
}
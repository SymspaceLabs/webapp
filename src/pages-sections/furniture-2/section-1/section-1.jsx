// import Button from "@mui/material/Button";
// import Container from "@mui/material/Container"; // GLOBAL CUSTOM COMPONENTS

// import { H2, Paragraph, Span } from "../../../components/Typography"; // STYLED COMPONENT

// import { RootStyle } from "./styles"; // IMPORT IMAGES

// export default function Section1() {
//   return <Container>
//       <RootStyle>
//         <LazyImage className="banner" alt="furniture shop" src={headerImg} />

//         <div className="content">
//           <Paragraph textTransform="uppercase" fontSize={28} fontWeight={600}>
//             Spring
//           </Paragraph>

//           <H2 lineHeight={1} textTransform="uppercase" fontSize={{
//           sm: 60,
//           xs: 48
//         }}>
//             Collection
//           </H2>

//           <Paragraph fontSize={18} mt={1} mb={3}>
//             Start from <Span fontWeight={700}>$40.45</Span>
//           </Paragraph>

//           <Button variant="contained" color="orange" size="large">
//             Shop Now
//           </Button>
//         </div>
//       </RootStyle>
//     </Container>;
// }

import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import LazyImage from "../../../components/LazyImage";
import headerImg from "../../../../public/assets/images/headers/furniture-2.jpg";

export default function Section2() {
  return (
    <Grid sx={{background:'#1F1F1F'}}>
      <Container>
        <Box sx={{ flexGrow: 1, py: 8 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6} sx={{ display:'flex', flexDirection:'column' }}>
              <Typography  sx={{ fontFamily:'Helvetica', color:'#797979', fontSize: 28, fontWeight:'bold' }} >
                AI Powered AR Commerce
              </Typography>
              <Typography sx={{ fontFamily:'Elemental End', color:'#fff', fontSize: 80, fontWeight:'bold' }} >
                SYMSPACE
              </Typography>
              <Typography sx={{ fontFamily:'Helvetica', color:'#797979', fontSize: 18, fontWeight:'bold' }} >
                Revolutionize your shopping experience through Augmented Reality.
              </Typography>
              <Box sx={{ display:'flex', gap:'15px', pt:5}}>
                <Button variant="outlined" sx={{  fontFamily:'Helvetica', color:'#fff', borderRadius:'50px', py:2, px:7.5 }}>
                  Get Started
                </Button>
                <Button variant="contained" color="primary" sx={{  fontFamily:'Helvetica', color:'#fff', borderRadius:'50px', py:2, px:7.5, background:'linear-gradient(225deg, #18C8FF 14.89%, #933FFE 85.85%)' }}>
                  Learn More
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center' }}>
                {/* <LazyImage alt="furniture shop" src={headerImg} /> */}
                <video
                  width="50%"
                  height="auto"
                  autoPlay
                  loop
                  muted
                  src="https://uploads-ssl.webflow.com/64694132a19474ee2218a9e6/648a8e1d8d146c19eb799200_Prosthetic_CMP_black_trimeed-transcode.mp4"
                  poster="https://uploads-ssl.webflow.com/64694132a19474ee2218a9e6/648a8e1d8d146c19eb799200_Prosthetic_CMP_black_trimeed-poster-00001.jpg"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Grid>

  );
}

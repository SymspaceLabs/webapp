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
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1, py: 8 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography sx={{color:'#fff'}} variant="h6" color="textSecondary" paragraph>
                AI Powered AR Commerce
              </Typography>
              <Typography sx={{color:'#fff'}} variant="h3" component="h1" gutterBottom>
                SYMSPACE
              </Typography>
              <Typography sx={{color:'#fff'}} variant="h6" color="textSecondary" paragraph>
                Revolutionize your shopping experience through Augmented Reality.
              </Typography>
              <Box sx={{ display:'flex', gap:'15px'}}>
                <Button variant="outlined" sx={{ color:'#fff', borderRadius:'50px', py:2, px:7.5 }}>
                  Get Started
                </Button>
                <Button variant="contained" color="primary" sx={{ color:'#fff', borderRadius:'50px', py:2, px:7.5, background:'linear-gradient(225deg, #18C8FF 14.89%, #933FFE 85.85%)' }}>
                  Learn More
                </Button>
              </Box>
                

            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center' }}>
              <LazyImage alt="furniture shop" src={headerImg} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Grid>

  );
}

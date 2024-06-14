// import Button from "@mui/material/Button";
// import Container from "@mui/material/Container"; // GLOBAL CUSTOM COMPONENTS

// import LazyImage from "../../../components/LazyImage";
// import { H2, Paragraph, Span } from "../../../components/Typography"; // STYLED COMPONENT

// import { RootStyle } from "./styles"; // IMPORT IMAGES

// import headerImg from "../../../../public/assets/images/headers/furniture-2.jpg";
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

export default function Section8() {
  return (
    <Grid sx={{background:'#EDEDED', py:10}}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            SYM-AI
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            Symspace's 3D modeling Sym-AI web page serves as a collaborative platform, facilitating communication and feedback between brands and the Symspace team. This ensures that the generated 3D models align with the brand's vision and requirements, fostering a productive partnership. Brands can request customized 3D models based on their specific requirements, such as adding branding elements, adjusting colors or materials, and exploring different variations of the product. Distinct size measurements can also be requested. This adaptability allows brands to showcase their products in a unique and tailored manner. We have streamlined the entire 3D modeling process, from requesting models to receiving the final outputs. This efficient workflow saves time and resources for brands, enabling them to focus on their core business activities. This 3D Product shirt is used in our AR Marketplace for consumers to view in our AR Trial Room experience.
          </Typography>
        </Box>
      </Container>
    </Grid>
  );
}

// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import Container from "@mui/material/Container"; // GLOBAL CUSTOM COMPONENTS

// import { H3, Paragraph } from "../../../components/Typography";
// import ProductCard12 from "../../../components/product-cards/product-card-12"; // API FUNCTIONS

// import api from "../../../utils/__api__/furniture-2";
// export default async function Section3() {
//   const products = await api.getNewArrivalProducts();
//   return <Container>
//       <Box mt={8} mb={4} textAlign="center">
//         <H3 fontSize={{
//         sm: 30,
//         xs: 27
//       }}>New Arrivals</H3>
//         <Paragraph color="grey.600" fontSize={{
//         sm: 16,
//         xs: 14
//       }}>
//           There are many variations passages
//         </Paragraph>
//       </Box>

//       <Grid container spacing={3}>
//         {products.map(product => <Grid item lg={3} md={4} sm={6} xs={12} key={product.id}>
//             <ProductCard12 product={product} />
//           </Grid>)}
//       </Grid>
//     </Container>;
// }

import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';

export default function Section3() {
  return (
    <Grid sx={{background:'#1F1F1F'}}>
      <Container maxWidth="md">
        <Box sx={{ display:'flex', flexDirection:'column', gap:3, textAlign: 'left', py: 8 }}>
          <Typography  sx={{ fontFamily:'Helvetica', color:'#fff', fontSize: 72, fontWeight:'bold' }} >
            Application
          </Typography>
          <Typography sx={{ fontFamily:'Helvetica', color:'#fff', fontSize: 16 }}>
            Optimized for user experience, our AR application allows consumers to leverage various advanced AR features to trial products like never before. Consumers are able to augment 3D products realistically in their own space, providing a virtual trial room experience for clothes, furniture, and more. The Symspace app goes beyond visualization by offering near-precise sizing recommendations, reducing returns, and increasing consumer confidence levels.
          </Typography>
          <Box>
              <Button variant="outlined" sx={{  fontFamily:'Helvetica', color:'#fff', borderRadius:'50px', py:2, px:7.5 }}>
                Get Started
              </Button>
          </Box>
        </Box>
      </Container>
    </Grid>

  );
}

// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import Container from "@mui/material/Container"; // GLOBAL CUSTOM COMPONENTS

// import { H3, Paragraph } from "../../../components/Typography"; // LOCAL CUSTOM COMPONENT

// import TestimonialCard from "./testimonial-card"; // API FUNCTIONS

// import api from "../../../utils/__api__/furniture-2";
// export default async function Section7() {
//   const testimonials = await api.getTestimonial();
//   return <Box bgcolor="grey.50" mt={10} pt={8} pb={30}>
//       <Container>
//         <Box mb={5} textAlign="center">
//           <H3 fontSize={{
//           sm: 30,
//           xs: 27
//         }}>Testimonial</H3>
//           <Paragraph color="grey.600" fontSize={{
//           sm: 16,
//           xs: 14
//         }}>
//             There are many variations passages
//           </Paragraph>
//         </Box>

//         <Grid container spacing={3}>
//           {testimonials.map(item => <Grid item md={4} xs={12} key={item.id}>
//               <TestimonialCard testimonial={item} />
//             </Grid>)}
//         </Grid>
//       </Container>
//     </Box>;
// }

import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import LazyImage from "../../../components/LazyImage"; // LOCAL CUSTOM COMPONENTS

export default function Section7() {
  return (
    <Grid sx={{background:'#1F1F1F'}}>
      <Container>
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
                <Button variant="outlined" sx={{ color:'#fff', borderRadius:'50px', py:2, px:7.5 }}>
                  Get Started
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center' }}>
                <LazyImage
                  width={250}
                  height={250}
                  src="/assets/images/dashboard.png"
                  alt="iphone"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Grid>

  );
}

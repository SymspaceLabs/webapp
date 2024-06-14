import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import Image from 'next/image';

export default function Section7() {
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
                <Button variant="outlined" sx={{ color:'#fff', borderRadius:'50px', py:2, px:7.5 }}>
                  Get Started
                </Button>
              </Box>
                

            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center' }}>
                <Image
                  width={250}
                  height={250}
                  src="https://cdn-images-1.medium.com/v2/resize:fit:750/1*CaU--1NW8UQPRGPMx_4FEg.png"
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

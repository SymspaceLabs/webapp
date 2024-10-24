"use client";

import React from 'react';
import { Box, Container, Typography, Button, Grid, useTheme } from '@mui/material';
import LazyImage from "../../../components/LazyImage";
import { section2Styles } from './styles';

export default function Section2() {
  const theme = useTheme(); // Get theme object for responsive design
  const styles = section2Styles(theme); // Apply theme to styles

  return (
    <Grid sx={styles.rootGrid}>
      <Container sx={styles.container}>
        {/* Blob Circles */}
        <Box sx={styles.blob1} />
        <Box sx={styles.blob2} />
        <Box sx={styles.contentBox}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography sx={styles.heading}>
                AI Powered AR Commerce
              </Typography>
              <Typography sx={styles.title}>
                SYMSPACE
              </Typography>
              <Typography sx={styles.description}>
                Revolutionize your shopping experience through Augmented Reality.
              </Typography>
              <Box sx={styles.buttonGroup}>
                <Button variant="outlined" sx={styles.outlinedButton}>
                  Get Started
                </Button>
                <Button variant="contained" sx={styles.containedButton}>
                  <Typography sx={styles.buttonText}>
                    Learn More
                  </Typography>
                  <Box sx={styles.imageBox}>
                    <LazyImage alt="furniture shop" width={25} height={25} src="/assets/images/sparkler.png" />
                  </Box>
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={styles.videoContainer}>
                <video
                  width="50%"
                  height="auto"
                  autoPlay
                  loop
                  muted
                  src="https://uploads-ssl.webflow.com/64694132a19474ee2218a9e6/648a8e1d8d146c19eb799200_Prosthetic_CMP_black_trimeed-transcode.mp4"
                  poster="https://uploads-ssl.webflow.com/64694132a19474ee2218a9e6/648a8e1d8d146c19eb799200_Prosthetic_CMP_black_trimeed-poster-00001.jpg"
                  style={{ position: 'relative', zIndex: 2 }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Grid>
  );
}

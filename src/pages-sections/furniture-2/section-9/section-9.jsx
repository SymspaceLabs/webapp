import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import LazyImage from "../../../components/LazyImage";
import ThreeModel from '../../../components/ThreeModel';
import TShirtCanvas  from "../../../components/T-ShirtCanvas";
import HandBagCanvas from '../../../components/HandBagCanvas';

import { sectionStyles } from './styles';

export default function Section9() {
  return (
    <Grid sx={sectionStyles.gridContainer}>
      <Container>
        <Box sx={sectionStyles.boxContainer}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6} sx={sectionStyles.leftGridItem}>
              <Box sx={sectionStyles.textBoxGrey}>
                <Typography sx={sectionStyles.typographyStyles}>
                  Innovative and immersive experiences
                </Typography>
              </Box>
              <Box sx={sectionStyles.textBoxWhite}>
                <Typography sx={sectionStyles.typographyStyles}>
                  Improve consumer confidence and convenience
                </Typography>
              </Box>
              <Box sx={sectionStyles.textBoxGrey}>
                <Typography sx={sectionStyles.typographyStyles}>
                  Reduce manufacturing and inventory costs
                </Typography>
              </Box>
              <Box sx={sectionStyles.textBoxWhite}>
                <Typography sx={sectionStyles.typographyStyles}>
                  Customizable AR content for marketing purposes
                </Typography>
              </Box>
              <Box sx={sectionStyles.textBoxGrey}>
                <Typography sx={sectionStyles.typographyStyles}>
                  Awareness and assistance for underserved communities
                </Typography>
              </Box>
              <Box sx={sectionStyles.textBoxWhite}>
                <Typography sx={sectionStyles.typographyStyles}>
                  Gauge consumer demand through AR Room
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={sectionStyles.rightGridItem}>
                <HandBagCanvas />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Grid>
  );
}
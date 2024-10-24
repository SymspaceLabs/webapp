import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { styles } from './styles';

export default function Section3() {
  return (
    <Grid sx={styles.gridContainer}>
      <Container sx={styles.container}>
        {/* Blob Circles */}
        <Box sx={styles.blobCircle} />
        <Box sx={styles.contentBox}>
          <Typography sx={styles.titleText}>
            Application
          </Typography>
          <Typography sx={styles.descriptionText}>
            Optimized for user experience, our AR application allows consumers to leverage various advanced AR features to trial products like never before. Consumers are able to augment 3D products realistically in their own space, providing a virtual trial room experience for clothes, furniture, and more. The Symspace app goes beyond visualization by offering near-precise sizing recommendations, reducing returns, and increasing consumer confidence levels.
          </Typography>
          <Box sx={styles.buttonContainer}>
            <Button variant="outlined" sx={styles.learnMoreButton}>
              Learn More
            </Button>
          </Box>
        </Box>
      </Container>
    </Grid>

  );
}

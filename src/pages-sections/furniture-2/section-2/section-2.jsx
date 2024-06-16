// 
import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';

export default function Section2() {
  return (
    <Grid sx={{background:'#EDEDED', py:10}}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', py: 8, display:'flex', flexDirection:'column', gap:5 }}>
          <Typography sx={{ fontFamily:'Helvetica', color:'#4E4E4E', fontSize: 72, fontWeight:'bold' }} >
            Future of Retail
          </Typography>
          <Typography sx={{ fontFamily:'Helvetica', color:'#909090', fontSize: 16 }}>
            In the rapidly advancing era of XR hardware, Symspace is at the forefront of empowering brands for the future. By creating highly accurate, detailed, realistic 3D models, we enable seamless integration into the upcoming AR ecosystem. We imagine a world where individuals can effortlessly explore and purchase products remotely by immersing themselves in digital and virtual experiences. With Symspace, brands are prepared to spearhead the AR revolution and redefine the shopping experience. Embrace the future and shape the landscape of retail with us.
          </Typography>
          <Box>
            <Button sx={{ color:'#fff', background:'#000', borderRadius:'50px', py:2, px:7.5,}}>
              Partner
            </Button>
          </Box>

        </Box>
      </Container>
    </Grid>
  );
}

// import Grid from "@mui/material/Grid";
// import Container from "@mui/material/Container"; // LOCAL CUSTOM COMPONENT

// import BannerCard from "./banner-card"; // GLOBAL CUSTOM COMPONENT

// import LazyImage from "../../../components/LazyImage"; // IMPORT IMAGES

// import bannerOne from "../../../../public/assets/images/banners/banner-30.jpg";
// import bannerTwo from "../../../../public/assets/images/banners/banner-31.jpg";
// export default function Section4() {
//   return <Container>
//       <Grid container spacing={3} mt={6}>
//         <Grid item lg={6} md={6} xs={12}>
//           <BannerCard title="Bed Room" description="Up To 20% Off All Furniture On Store" ImageComponent={<LazyImage alt="bed room" src={bannerOne} />} />
//         </Grid>

//         <Grid item lg={6} md={6} xs={12}>
//           <BannerCard title="Dining deals" description="Up To 20% Off All Furniture On Store" ImageComponent={<LazyImage alt="dining room" src={bannerTwo} />} />
//         </Grid>
//       </Grid>
//     </Container>;
// }

import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';

export default function Section2() {
  return (
    <Grid sx={{background:'#EDEDED', py:10}}>
      <Container>
        <Box sx={{ textAlign: 'center', py: 8, display:'flex', flexDirection:'column', gap:5 }}>
          <Typography sx={{ fontFamily:'Helvetica', color:'#4E4E4E', fontSize: 72, fontWeight:'bold' }} >
          Convenient & Comfortable
          </Typography>
          <Typography sx={{ fontFamily:'Helvetica', color:'#909090', fontSize: 16 }}>
          Explore products from the comfort of your home to conveniently and confidently shop through Augmented Reality          </Typography>
          <Box>
            <Button sx={{ color:'#fff', background:'#000', borderRadius:'50px', py:2, px:7.5,}}>
              Shop
            </Button>
          </Box>

        </Box>
      </Container>
    </Grid>
  );
}

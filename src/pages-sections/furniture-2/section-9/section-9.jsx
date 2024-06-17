// import Grid from "@mui/material/Grid";
// import Container from "@mui/material/Container"; // GLOBAL CUSTOM COMPONENT

// import ServiceCard1 from "../../../components/service-cards/service-card-1"; // API FUNCTIONS

// import api from "../../../utils/__api__/furniture-2";
// export default async function Section9() {
//   const services = await api.getServices();
//   return <Container>
//       <Grid container spacing={3} mt={8}>
//         {services.map(({
//         icon,
//         id,
//         title,
//         description
//       }) => <Grid item lg={3} sm={6} xs={12} key={id}>
//             <ServiceCard1 icon={icon} title={title} description={description} />
//           </Grid>)}
//       </Grid>
//     </Container>;
// }


import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import LazyImage from "../../../components/LazyImage";
import headerImg from "../../../../public/assets/images/headers/furniture-2.jpg";

export default function Section9() {
  return (
    <Grid sx={{background:'#1F1F1F'}}>
      <Container>
        <Box sx={{ flexGrow: 1, py: 8 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6} sx={{ display:'flex', flexDirection:'column', gap:2  }}>
              <Box sx={{ display:'flex', flexDirection:'column', background:'#fff', p:2, borderRadius:'25px'}}>
                <Typography sx={{ fontFamily:'Helvetica', color:'#797979', fontSize: 28, fontWeight:'bold' }} >AI Powered AR Commerce</Typography>
              </Box>
              <Box sx={{ display:'flex', flexDirection:'column', background:'#fff', p:2, borderRadius:'25px'}}>
                <Typography sx={{ fontFamily:'Helvetica', color:'#797979', fontSize: 28, fontWeight:'bold' }} >AI Powered AR Commerce</Typography>
              </Box>
              <Box sx={{ display:'flex', flexDirection:'column', background:'#fff', p:2, borderRadius:'25px'}}>
                <Typography sx={{ fontFamily:'Helvetica', color:'#797979', fontSize: 28, fontWeight:'bold' }} >AI Powered AR Commerce</Typography>
              </Box>
              <Box sx={{ display:'flex', flexDirection:'column', background:'#fff', p:2, borderRadius:'25px'}}>
                <Typography sx={{ fontFamily:'Helvetica', color:'#797979', fontSize: 28, fontWeight:'bold' }} >AI Powered AR Commerce</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center' }}>
              <LazyImage
                alt="furniture shop"
                src="/assets/images/t-shirt.png"
                width={200}
                height={200}
              />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Grid>
  );
}
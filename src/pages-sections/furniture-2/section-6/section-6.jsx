// import Grid from "@mui/material/Grid";
// import Container from "@mui/material/Container"; // GLOBAL CUSTOM COMPONENT

// import LazyImage from "../../../components/LazyImage"; // LOCAL CUSTOM COMPONENTS

// import Banner1 from "./banner-1";
// import Banner2 from "./banner-2"; // IMPORT IMAGES

// import banner1 from "../../../../public/assets/images/banners/banner-33.jpg";
// import banner2 from "../../../../public/assets/images/banners/banner-34.jpg";
// import banner3 from "../../../../public/assets/images/banners/banner-35.jpg";
// import banner4 from "../../../../public/assets/images/banners/banner-36.jpg";
// export default function Section6() {
//   return <Container>
//       <Grid container spacing={3} mt={6}>
//         {
//         /* COUNT DOWN BANNER */
//       }
//         <Grid item lg={7} md={6} xs={12}>
//           <Banner1 />
//         </Grid>

//         {
//         /* OFFICE TABLE BANNER */
//       }
//         <Grid item lg={5} md={6} xs={12}>
//           <Banner2 title="Office Table" ImageComponent={<LazyImage src={banner1} alt="banner" />} />
//         </Grid>

//         {
//         /* SOFA STYLE BANNER */
//       }
//         <Grid item lg={3} md={6} xs={12}>
//           <Banner2 isContentCenter ImageComponent={<LazyImage src={banner2} alt="banner" />} title={<>
//                 Sofa style <br /> 2024
//               </>} />
//         </Grid>

//         {
//         /* LIGHTING BANNER */
//       }
//         <Grid item lg={6} md={6} xs={12}>
//           <Banner2 title="Lighting" ImageComponent={<LazyImage src={banner3} alt="banner" />} />
//         </Grid>

//         {
//         /* SALE UP BANNER */
//       }
//         <Grid item lg={3} md={6} xs={12}>
//           <Banner2 ImageComponent={<LazyImage src={banner4} alt="banner" />} title={<>
//                 sale up to <br /> 30% off
//               </>} />
//         </Grid>
//       </Grid>
//     </Container>;
// }

import { Box, Typography, Button, Grid, Container } from '@mui/material';
import LazyImage from "../../../components/LazyImage"; // LOCAL CUSTOM COMPONENTS

export default function Section6() {
  return (
    <Grid sx={{ background:'#1F1F1F', py:10}}>
      <Box sx={{ maxWidth:'1440px', m:'0 auto' }}>
        <Box sx={{ flexGrow: 1, py: 8 }}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item s={12} md={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', gap:'10px' }}>
                <Box sx={{ width: '100%', height: 328, pr: 6, bgcolor: 'white', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', borderRadius:'50px'  }}>
                  <LazyImage
                    alt="Image" 
                    width={220}
                    height={220}
                    src="/assets/images/card/tree.png"
                  />
                  <Box sx={{ flex: 1, pl: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', gap: 2 }}>
                    <Typography sx={{ alignSelf: 'stretch', color: 'black', fontSize: 40, fontFamily: 'Helvetica', fontWeight: 700, lineHeight: '40px', wordWrap: 'break-word' }}>
                      Environmental Impact
                    </Typography>
                    <Typography sx={{ alignSelf: 'stretch', color: '#909090', fontSize: 14, fontFamily: 'Helvetica', fontWeight: 700, lineHeight: '24px', wordWrap: 'break-word' }}>
                      Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ width: '100%', height: 272, display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', gap:'10px' }}>
                  <Box sx={{ flex: 1, height: '100%', pr: 6, bgcolor: '#EDEDED', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 3, borderRadius:'50px'  }}>
                    <LazyImage 
                      alt="Image" 
                      width={94}
                      height={94}
                      src="/assets/images/card/cursor.png"
                    />
                    <Box sx={{ width: 160, height: 143, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                      <Typography sx={{ alignSelf: 'stretch', color: 'black', fontSize: 29, fontFamily: 'Helvetica', fontWeight: 700, lineHeight: '40px', wordWrap: 'break-word' }}>
                        Website<br />Integration
                      </Typography>
                      <Typography sx={{ alignSelf: 'stretch', color: '#909090', fontSize: 14, fontFamily: 'Helvetica', fontWeight: 700, lineHeight: '24px', wordWrap: 'break-word' }}>
                        Computational audio. Listen, it's powerful
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ flex: 1, height: '100%', pr: 6, bgcolor: '#353535', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', borderRadius:'50px'  }}>
                    <Box sx={{ width: 147.13, height: 158.26, position: 'relative' }}>
                      <LazyImage
                        alt="Image" 
                        width={147.13}
                        height={158.26}
                        style={{ left: 0, top: 0, position: 'absolute' }} 
                        src="/assets/images/card/mobile.png"
                      />
                    </Box>
                    <Box sx={{ width: 160, height: 144, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                      <Typography sx={{ alignSelf: 'stretch', color: 'white', fontSize: 29, fontFamily: 'Helvetica', fontWeight: 700, lineHeight: '40px', wordWrap: 'break-word' }}>
                        Application<br />Integration
                      </Typography>
                      <Typography sx={{ alignSelf: 'stretch', color: '#909090', fontSize: 14, fontFamily: 'Helvetica', fontWeight: 700, lineHeight: '24px', wordWrap: 'break-word' }}>
                        An immersive way to experience entertainment
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item s={12} md={6}>
              <Box sx={{ height: 600, pt: 5.5, pb: 5.5, px: 4, bgcolor: '#EDEDED', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 1, borderRadius:'50px' }}>
                  <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 2 }}>
                    <Box sx={{ alignSelf: 'stretch', height: 200, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 2 }}>
                      <Typography sx={{ alignSelf: 'stretch', color: 'black', fontSize: 48, fontFamily: 'Helvetica', fontWeight: 700, lineHeight: '56px', wordWrap: 'break-word' }}>
                        Underserved Customers
                      </Typography>
                      <Typography sx={{ alignSelf: 'stretch', color: '#909090', fontSize: 14, fontFamily: 'Helvetica', fontWeight: 700, lineHeight: '24px', wordWrap: 'break-word' }}>
                        The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
                      </Typography>
                    </Box>
                    <Button sx={{ pl: 7, pr: 7, pt: 2, pb: 2, borderRadius: 50, border: '1px black solid', justifyContent: 'center', alignItems: 'center', gap: 1, display: 'inline-flex' }}>
                      <Typography sx={{ textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Helvetica', fontWeight: 700, lineHeight: '24px', wordWrap: 'break-word' }}>
                        Learn More
                      </Typography>
                    </Button>
                  </Box>
                  <LazyImage
                    alt="Image" 
                    width={200}
                    height={200}
                    src="/assets/images/card/wheelchair.png"
                  />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
}

import Link from "next/link";
import { Box, Container, Typography, Button, Grid } from '@mui/material';

import { Carousel } from "../../../components/carousel";
import { StyledGrid } from "./styles";

export default function Section2() {
  return (
    <Box sx={{ py:3 }}>
      <Container>
        <Typography sx={{ textAlign:'center', color:'#000', pt:8, pb:3, fontFamily: 'Elemental End', textTransform: 'lowercase', fontSize: { xs: 30, sm: 30, md: 30, lg: 30, xl: 30 } }}>
          Trending News
        </Typography>
        <Carousel dots autoplay adaptiveHeight arrows={true} spaceBetween={1} slidesToShow={2}>
          {cardList.map((item, ind) => (
            <div key={ind}>
              <StyledGrid container sx={{ position: 'relative', borderRadius: 10, overflow: 'hidden' }}>
                <Grid item xs={12} sx={{ position: 'relative', height: 300, backgroundImage: `url(${item.imgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
                    <Button sx={{ color:'#fff', fontFamily: 'Elemental End', textTransform: 'lowercase', background: "rgba(255, 255, 255, 0.01)", border: "0.9px solid rgba(255, 255, 255, 0.3)", backdropFilter: "blur(13.515px)", borderRadius: "37.03px" }} LinkComponent={Link} href={item.shopUrl}>
                      {item.title}
                    </Button>
                  </div>
                </Grid>
              </StyledGrid>
            </div>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
}

const cardList = [
  {
    id: 1,
    title: "brands  supporting  d.e.i.",
    imgUrl: `/assets/images/slider/image-1.png`,
    shopUrl: "/",
  },
  {
    id: 2,
    title: "future  of  shopping",
    imgUrl: `/assets/images/slider/image-2.png`,
    shopUrl: "/",
  },
  {
    id: 3,
    title: "25% Special Off Today Only for Vegetables",
    imgUrl: `/assets/images/slider/image-1.png`,
    shopUrl: "/",
  }
];

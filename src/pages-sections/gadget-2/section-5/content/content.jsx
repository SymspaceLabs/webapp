"use client";

import Link from "next/link";
import { Box, Container, Typography, IconButton, Grid } from '@mui/material';

import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward"; // LOCAL CUSTOM HOOK

import useCarousel from "./useCarousel"; // GLOBAL CUSTOM COMPONENTS
import LazyImage from "../../../../components/LazyImage";
import FlexBox from "../../../../components/flex-box/flex-box";

// import { Carousel } from "../../../../components/carousel";
import { FlexBetween, FlexRowCenter } from "../../../../components/flex-box";
import { H2, Paragraph } from "../../../../components/Typography";
// import ProductCard11 from "../../../../components/product-cards/product-card-11"; // CUSTOM DATA MODEL

// ==============================================================
export default function Content({
  products
}) {
  // const {
  //   carouselRef,
  //   responsive,
  //   handleNext,
  //   handlePrev
  // } = useCarousel();
  return <Container sx={{}}>
      <FlexRowCenter mt={10} mb={5}>
        <div>
          <H2 fontSize={{ sm: 34, xs: 28,  fontFamily: 'Elemental End', textTransform: 'lowercase', }}>
            Best Seller Products
          </H2>
          <Paragraph sx={{textAlign:'center'}} color="grey.600" fontSize={{ sm: 16, xs: 14 }}>
            Augmented Reality features available in the Symspace app
          </Paragraph>
        </div>

        {/* <div>
          <IconButton onClick={handlePrev}>
            <ArrowBack fontSize="small" />
          </IconButton>

          <IconButton onClick={handleNext} sx={{
          backgroundColor: "white",
          boxShadow: 2,
          ml: 0.5
        }}>
            <ArrowForward fontSize="small" />
          </IconButton>
        </div> */}
      </FlexRowCenter>
      <Box sx={{px:10, borderRadius:'25px', py:10, background: "linear-gradient(225deg, #18C8FF 14.89%, #933FFE 85.85%)" }}>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item lg={3} md={4} sm={6} xs={12} key={product.id}>
              <Link href={`/products/${product.slug}`}>
                <FlexBox
                  flexDirection="column"
                  bgcolor="rgba(255, 255, 255, 0.1)"
                  borderRadius={3}
                  mb={2}
                >
                  <LazyImage
                    alt={product.title}
                    width={380}
                    height={379}
                    src={product.thumbnail}
                  />
                  <Box sx={{ px: 4, pb: 4 }}>
                    <Typography
                      sx={{ color: "#fff", fontSize: "17px", fontWeight: 700 }}
                    >
                      {product.title}
                    </Typography>
                    <Typography
                      sx={{ color: "#fff", fontSize: "17px", fontWeight: 700 }}
                    >
                      {product.price}
                    </Typography>
                  </Box>
                </FlexBox>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
        {/* <Carousel ref={carouselRef} slidesToShow={4} responsive={responsive} arrows={false}>
          {products.map(product => <Link key={product.id} href={`/products/${product.slug}`}>
              <ProductCard11 title={product.title} image={product.thumbnail} sale={product.discount ? true : false} />
            </Link>)}
        </Carousel> */}
    </Container>
;
}
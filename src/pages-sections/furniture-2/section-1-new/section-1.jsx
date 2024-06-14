"use client";

// import Grid from "@mui/material/Grid";
// import Container from "@mui/material/Container";

import LazyImage from "components/LazyImage";
import { H1, Paragraph } from "components/Typography"; 

// STYLED COMPONENTS
// import { StyledBox, StyledGrid, ContentWrapper, GridItemTwo, CarouselButton } from "./styles"; // ==========================================================

// ==========================================================
export default function Section1() {

  return (
      <Container>
        {/* <StyledGrid container> */}
          <Grid item md={6} sm={6} xs={12}>
            <ContentWrapper>
              <Paragraph color="primary.main">This is the subTitle</Paragraph>

              <H1 maxWidth={600}>This is the title</H1>

              <CarouselButton disableElevation variant="contained">
                Text
              </CarouselButton>
            </ContentWrapper>
          </Grid>
          <GridItemTwo item md={6} sm={6} xs={12}>
            <LazyImage priority alt={title} width={600} height={450} src="https://bazaar-gold.vercel.app/_next/image?url=%2Fassets%2Fimages%2FGift%20Shop%2FHeader.png&w=640&q=75" />
          </GridItemTwo>
        {/* </StyledGrid> */}
      </Container>

)
  
}
 
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container"; // GLOBAL CUSTOM COMPONENTS
import Link from "next/link";

import { H3, Paragraph } from "../../../components/Typography";
import ProductCard12 from "../../../components/product-cards/product-card-12"; // API FUNCTIONS
import { FlexBox } from "../../../components/flex-box"; // CUSTOM UTILS LIBRARY FUNCTIONS
import LazyImage from "../../../components/LazyImage";
import { Typography } from "@mui/material";
import { calculateDiscount, currency } from "../../../lib"; // STYLED COMPONENTS

import api from "../../../utils/__api__/furniture-2";
export default async function Section12() {
  const products = await api.getNewArrivalProducts();
  return <Grid sx={{ background:'#1F1F1F', py:25 }}>
    <Container>
      <Box sx={{color:'#fff'}} py={4} textAlign="center">
        <H3 fontSize={{ sm: 30, xs: 27 }}>New Arrivals</H3>
        <Paragraph color="grey.600" fontSize={{ sm: 16, xs: 14 }}>
          There are many variations passages
        </Paragraph>
      </Box>

      <Grid container spacing={3}>
        {products.map(product => <Grid item lg={3} md={4} sm={6} xs={12} key={product.id}>
            {/* <ProductCard12 product={product} /> */}
            <Link href={`/products/${product.slug}`}>
              <FlexBox flexDirection="column" bgcolor="rgba(255, 255, 255, 0.1)" borderRadius={3} mb={2}>
                <LazyImage alt={product.title} width={380} height={379} src={product.thumbnail} />
                <Box sx={{ px:4, pb:4 }}>
                  <Typography sx={{color:'#fff', fontSize:'17px', fontWeight:700}}>{product.title}</Typography>
                  <Typography sx={{color:'#fff', fontSize:'17px', fontWeight:700}}>{calculateDiscount(product.price, product.discount)}</Typography>
                </Box>
              </FlexBox>
            </Link>
          </Grid>)}
      </Grid>
    </Container>
  </Grid>;
}
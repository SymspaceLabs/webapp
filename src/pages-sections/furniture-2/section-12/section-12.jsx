"use client";

import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container"; // GLOBAL CUSTOM COMPONENTS
import Link from "next/link";
import { H3, Paragraph } from "../../../components/Typography";
import { FlexBox } from "../../../components/flex-box"; // CUSTOM UTILS LIBRARY FUNCTIONS
import LazyImage from "../../../components/LazyImage";
import { Typography } from "@mui/material";
import { calculateDiscount, currency } from "../../../lib"; // STYLED COMPONENTS

import api from "../../../utils/__api__/furniture-2";
export default async function Section12() {

  const [products, setProducts] = useState([]);
  const [products1, setProducts1] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/products",
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setProducts(data); // Update the state with the fetched data
        console.log(data);
      }
    } catch (error) {
      console.error('Error during fetching products:', error);
    }
  };
  const getAllProducts2 = async () => {
    try {
      const products1 = await api.getNewArrivalProducts();
      setProducts1(products1);
    } catch (error) {
      console.error("Error during fetching products:", error);
    }
  };

  useEffect(() => {
    getAllProducts();
    getAllProducts2();
  }, []);

  // const products1 = await api.getNewArrivalProducts();
  // const products2 = await api.getNewArrivalProducts();
  // console.log(products1)
  return <Grid sx={{ background:'#1F1F1F', py:25 }}>
    <Container>
      <Box sx={{color:'#fff'}} py={4} textAlign="center">
        <H3 fontSize={{ sm: 30, xs: 27 }}>New Arrivals</H3>
        <Paragraph color="grey.600" fontSize={{ sm: 16, xs: 14 }}>
          There are many variations passages
        </Paragraph>
      </Box>

      <Grid container spacing={3}>
        {products1.map(product => <Grid item lg={3} md={4} sm={6} xs={12} key={product.id}>
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

      <Grid container spacing={3}>
        {products?.map(product => <Grid item lg={3} md={4} sm={6} xs={12} key={product.id}>
            <Link href={`/products/${product.id}`}>
              <FlexBox flexDirection="column" bgcolor="rgba(255, 255, 255, 0.1)" borderRadius={3} mb={2}>
                <LazyImage alt={product.name} width={380} height={379} src={product.images} />
                <Box sx={{ px:4, pb:4 }}>
                  <Typography sx={{color:'#fff', fontSize:'17px', fontWeight:700}}>{product.name}</Typography>
                  <Typography sx={{color:'#fff', fontSize:'17px', fontWeight:700}}>{product.price}</Typography>
                </Box>
              </FlexBox>
            </Link>
          </Grid>
        )}
      </Grid>
    </Container>
  </Grid>;
}
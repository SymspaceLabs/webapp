"use client"

import Container from "@mui/material/Container"; // Local CUSTOM COMPONENTS
import ProductTabs from "../product-tabs";
import ProductIntro from "../product-intro";
import AvailableShops from "../available-shops";
import RelatedProducts from "../related-products";
import FrequentlyBought from "../frequently-bought"; // CUSTOM DATA MODEL
import Section5 from "../section-5";
import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import { styled, keyframes } from '@mui/material/styles';

// ==============================================================

const blob = keyframes`
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
`;

const BlobBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '25rem',
  height: '25rem',
  borderRadius: '50%',
  filter: 'blur(20px)',
  opacity: 0.7,
  animation: `${blob} 7s infinite`,
}));

export default function ProductDetailsPageView(props) {
  return  <Box sx={{ backgroundColor: 'fff', width: '100%', height:'100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', px: 16, }} >
            <Container className="mt-2 mb-2">
              <BlobBox sx={{ top: '15rem', right: '30rem', backgroundColor: '#D8B4FE', }} />
              <BlobBox sx={{ top: '15rem', right: '40rem', backgroundColor: '#FDE68A', animationDelay: '2s', }} />
              <BlobBox sx={{ top: '20rem', right: '35rem', backgroundColor: '#FBCFE8', animationDelay: '4s', }} />
              <ProductIntro product={props.product} />
              <ProductTabs />
              <Section5 /> {/* BEST SELLER PRODUCTS */}
              {/* <FrequentlyBought products={props.frequentlyBought} /> */}
              {/* <AvailableShops />
              <RelatedProducts products={props.relatedProducts} /> */}
            </Container>
          </Box>;
}
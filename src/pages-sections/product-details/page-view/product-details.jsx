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
  // const interBubble = useRef(null);
  
  // useEffect(() => {
  //   let curX = 0;
  //   let curY = 0;
  //   let tgX = 0;
  //   let tgY = 0;

  //   const handleMouseMove = (event) => {
  //     tgX = event.clientX;
  //     tgY = event.clientY;
  //   };

  //   const move = () => {
  //     curX += (tgX - curX) / 20;
  //     curY += (tgY - curY) / 20;
  //     if (interBubble.current) {
  //       interBubble.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
  //     }
  //     requestAnimationFrame(move);
  //   };

  //   window.addEventListener('mousemove', handleMouseMove);
  //   move();

  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);
  return <Box sx={{
              backgroundColor: 'fff',
              width: '100%',
              height:'100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative', 
              px: 16,
            }}
          >
            {/* <GradientContainer>
              <div className="circle1"></div>
              <div className="circle2"></div>
            </GradientContainer> */}
            
    
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

// const GradientBg = styled('div')(({ theme }) => ({
//   width: '100%',
//   height: '100%',
//   position: 'relative',
//   overflow: 'hidden',
//   background: '#fff',
//   top: 0,
//   left: 0,
// }));
 

// const simpleAnimation = keyframes`
//   0% { transform: scale(1); }
//   50% { transform: scale(1.2); }
//   100% { transform: scale(1); }
// `;
// const moveInCircle = keyframes`
//   0% { transform: rotate(0deg) translateX(150px) rotate(0deg); }
//   100% { transform: rotate(360deg) translateX(150px) rotate(-360deg); }
// `;

// const moveVertical = keyframes`
//   0% { transform: translateY(-20px); }
//   50% { transform: translateY(20px); }
//   100% { transform: translateY(-20px); }
// `;
// const GradientContainer = styled('div')({
//   width: '100%',
//   height: '100%',
//   '.circle1, .circle2': {
//     position: 'absolute',
//     borderRadius: '50%',
//     width: '50%',
//     height: '50%',
//     mixBlendMode: 'hard-light',
//   },
//   '.circle1': {
//     background: 'radial-gradient(circle at center, rgba(18, 113, 255, 0.8) 0, rgba(0, 0, 0, 1) 50%) no-repeat',
//     top: 'calc(50% - 40%)',
//     right: 'calc(50% - 40%)',
//     animation: `${simpleAnimation} 10s infinite`,
//   },
//   '.circle2': {
//     background: 'radial-gradient(circle at center, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 50%) no-repeat',
//     top: 'calc(50% - 40%)', // Adjusted for positioning
//     left: 'calc(50% - 40%)', // Adjusted for positioning
//     animation: `${moveVertical} 15s ease infinite`,
//   },
// });
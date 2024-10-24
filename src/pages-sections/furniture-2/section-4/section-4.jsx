'use client';

import React from 'react';
import { Container, Box } from '@mui/material';
import LazyImage from '../../../components/LazyImage'; // LOCAL CUSTOM COMPONENTS
import {
  StyledGrid,
  SectionBox,
  TitleText,
  DescriptionText,
  ShopButton,
  FloatingImage1,
  FloatingImage2,
} from './section4.styles'; // IMPORT STYLES

export default function Section2() {
  return (
    <StyledGrid>
      <FloatingImage1>
        <LazyImage
          width={500}
          height={500}
          src="/assets/images/iphone2.png"
          alt="iphone"
        />
      </FloatingImage1>

      <FloatingImage2>
        <LazyImage
          width={400}
          height={400}
          src="/assets/images/rayBand.png"
          alt="rayBand"
        />
      </FloatingImage2>

      <Container>
        <SectionBox>
          <TitleText>
            Convenient & Comfortable
          </TitleText>
          <DescriptionText>
            Explore products from the comfort of your home to conveniently and
            confidently shop through Augmented Reality.
          </DescriptionText>
          <Box>
            <ShopButton>
              Shop
            </ShopButton>
          </Box>
        </SectionBox>
      </Container>
    </StyledGrid>
  );
}

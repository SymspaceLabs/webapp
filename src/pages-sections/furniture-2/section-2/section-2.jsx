"use client";

import React from 'react';
import { Container } from '@mui/material';
import LazyImage from '../../../components/LazyImage'; // LOCAL CUSTOM COMPONENTS
import {
  StyledGrid,
  SectionBox,
  TitleText,
  DescriptionText,
  PartnerButton,
  FloatingImage1,
  FloatingImage2,
} from './section2.styles'; // IMPORT STYLES

export default function Section2() {
  return (
    <StyledGrid>
      <FloatingImage1>
        <LazyImage
          width={400}
          height={400}
          src="/assets/images/VR_set.png"
          alt="VR set"
        />
      </FloatingImage1>
      <FloatingImage2>
        <LazyImage
          width={400}
          height={400}
          src="/assets/images/iphone.png"
          alt="iphone"
        />
      </FloatingImage2>
      <Container>
        <SectionBox>
          <TitleText>
            Future of Retail
          </TitleText>
          <DescriptionText>
            In the rapidly advancing era of XR hardware, Symspace is at the
            forefront of empowering brands for the future. By creating highly
            accurate, detailed, realistic 3D models, we enable seamless
            integration into the upcoming AR ecosystem. We imagine a world where
            individuals can effortlessly explore and purchase products remotely
            by immersing themselves in digital and virtual experiences. With
            Symspace, brands are prepared to spearhead the AR revolution and
            redefine the shopping experience. Embrace the future and shape the
            landscape of retail with us.
          </DescriptionText>
          <PartnerButton>
            Partner
          </PartnerButton>
        </SectionBox>
      </Container>
    </StyledGrid>
  );
}

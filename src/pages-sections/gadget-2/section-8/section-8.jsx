import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container"; // GLOBAL CUSTOM COMPONENTS

import LazyImage from "../../../components/LazyImage";
import { H2, Paragraph } from "../../../components/Typography"; // STYLED COMPONENTS

import { BlackBox, StyledButton, YellowBox } from "./styles"; // IMPORT IMAGES

import iphone12 from "../../../../public/assets/images/products/iphone-12-2.png";
import speaker from "../../../../public/assets/images/products/lenovo-speaker.png";

export default function Section5() {
  return (
    <Container>
      <Grid container spacing={3} mt={5}>
        <Grid item lg={6} xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <YellowBox background="#353535">
                <div>
                  <H2  sx={{color:'#fff'}}  mb={4} lineHeight={1.2} fontSize={{ sm: 42, xs: 36 }}>
                    Advanced AR Advertisements
                  </H2>
                  <Paragraph sx={{color:'#fff'}} fontSize={16} mb={1}>
                    Equip viewers with immersive AR visuals on top of products or physical posters
                  </Paragraph>
                  <StyledButton>Contact Us</StyledButton>
                </div>
                {/* <div className="img-wrapper">
                  <LazyImage src={speaker} alt="Watch" />
                </div> */}
              </YellowBox>
            </Grid>
            <Grid item xs={12}>
              <YellowBox background="#BDBDBD">
                <div>
                  <H2 sx={{color:'#fff'}}  mb={4} lineHeight={1.2} fontSize={{ sm: 42, xs: 36 }}>
                    Application Integration
                  </H2>
                  <Paragraph sx={{color:'#fff'}}  fontSize={16} mb={1}>
                    An immersive way to shop conveniently and confidently with AR functionality enhancing every step of the user experience
                  </Paragraph>

                  <StyledButton>Contact Us</StyledButton>
                </div>
                {/* <div className="img-wrapper">
                  <LazyImage src={speaker} alt="Watch" />
                </div> */}
              </YellowBox>
            </Grid>
          </Grid>
        </Grid>

        <Grid item lg={6} xs={12}>
          <BlackBox background="#E0F0FD">
            <div className="img-wrapper">
              <LazyImage src={iphone12} alt="Watch" />
            </div>
            <div className="content">
              <H2 mb={4} lineHeight={1.2} fontSize={{ sm: 42, xs: 36 }}>
                Generate 3D Products through Artificial Intelligence  
              </H2>
              <Paragraph  sx={{color:'#fff'}} fontSize={16} mb={1}>
                Allow consumers to augment 3D products from the comfort of their home to revolutionize the way they engage with products
              </Paragraph>
              <StyledButton>Shop Now</StyledButton>
            </div>
          </BlackBox>
        </Grid>
      </Grid>
    </Container>
  );
}

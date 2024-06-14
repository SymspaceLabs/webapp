import Button from "@mui/material/Button";
import { Box } from "@mui/material"; // MUI Box component
import { H6, Paragraph, Span } from "../../../components/Typography"; // STYLED COMPONENTS
import { BannerCardWrapper } from "./styles";
import Image from 'next/image';

export default function BannerCard({ tag, title }) {
  return (
    <BannerCardWrapper>
      <Box className="content-wrapper" sx={{border:'1px solid white'}}>
        <Box className="content">
          <Paragraph fontWeight={600} textTransform="uppercase" fontSize={{ sm: 24, xs: 20 }}>
            {tag}
          </Paragraph>
          <H6 lineHeight={1} fontWeight={700} textTransform="uppercase" fontSize={{ sm: 36, xs: 32 }}>
            {title}
          </H6>
          <Paragraph color="grey.600" mb={2}>
            Revolutionize your shopping experience through Augmented Reality
          </Paragraph>
          <Button variant="contained" color="orange">
            Get Started
          </Button>
          <Button variant="contained" color="orange">
            Learn More
          </Button>
        </Box>
      </Box>
      <Box sx={{border:'1px solid white'}}>
        <Image
          width={100}
          height={100}
          alt="iphone"
          src="https://cdn-images-1.medium.com/max/750/1*1rolXkSG1SbBKlGndKrxIA.png"
        />
      </Box>
    </BannerCardWrapper>
  );
}

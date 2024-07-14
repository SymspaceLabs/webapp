import Image from "next/image"; // CUSTOM COMPONENTS
import FlexRowCenter from "../../../components/flex-box/flex-row-center"; // IMPORT IMAGES
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import logo from "../../../../public/assets/images/logo.svg";

export default function LogoWithTitle({title, subTitle}) {
  return <FlexRowCenter flexDirection="column" gap={1.5} mb={4}>
      {/* <Image src={logo} alt="bazaar" /> */}
      <Typography sx={{ fontFamily:'Elemental End', textTransform: 'lowercase', color:'#fff', fontSize: '36px', fontWeight:'bold', textAlign:'center' }}>
        {title}
      </Typography>
      <Typography sx={{ fontFamily:'Helvetica', color:'#fff', fontSize: 18, fontWeight:'bold' }}>
        {subTitle}
      </Typography>
    </FlexRowCenter>;
}
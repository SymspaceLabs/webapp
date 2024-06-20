import Image from "next/image"; // CUSTOM COMPONENTS
import FlexRowCenter from "../../../components/flex-box/flex-row-center"; // IMPORT IMAGES
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import logo from "../../../../public/assets/images/logo.svg";

export default function LogoWithTitle() {
  return <FlexRowCenter flexDirection="column" gap={1.5} mb={4}>
      {/* <Image src={logo} alt="bazaar" /> */}
      <Typography sx={{ fontFamily:'Elemental End', color:'#fff', fontSize: 25, fontWeight:'bold', textAlign:'center' }}>
        Begin your Journey
      </Typography>
      <Typography sx={{ fontFamily:'Helvetica', color:'#797979', fontSize: 18, fontWeight:'bold' }}>
        Create an account using your email
      </Typography>
    </FlexRowCenter>;
}
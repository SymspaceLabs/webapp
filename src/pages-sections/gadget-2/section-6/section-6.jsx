import Container from "@mui/material/Container"; // GLOBAL CUSTOM COMPONENTS

import LazyImage from "../../../components/LazyImage"; // STYLED COMPONENTS

import { RootStyle, StyledButton } from "./styles"; // IMPORT IMAGE

import shirt from "../../../../public/assets/images/background/image-1.png";
export default function Section6() {
  return <Container>
      <RootStyle>
        <div className="content">
        
          <h2>
            Augment Products whenever.<br />  From wherever.  
          </h2>
          <p>Sign up today.</p>

          <StyledButton>Beta Access</StyledButton>
        </div>

        <div className="img-wrapper">
          <LazyImage src={shirt} alt="Watch" />
        </div>
      </RootStyle>
    </Container>;
}
import Link from "next/link";
import { Fragment } from "react";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import clsx from "clsx"; // LOCAL CUSTOM HOOKS

import useHeader from "./hooks/use-header"; // GLOBAL CUSTOM COMPONENTS

import LazyImage from "../../components/LazyImage";
import FlexBox from "../../components/flex-box/flex-box"; // LOCAL CUSTOM COMPONENTS

import MobileHeader from "./components/mobile-header";
import DialogDrawer from "./components/dialog-drawer";
import CategoriesMenu from "./components/categories-menu";
import LoginCartButtons from "./components/login-cart-buttons"; // STYLED COMPONENTS
import Image from 'next/image';

import { HeaderWrapper, StyledContainer } from "./styles"; // ==============================================================

// ==============================================================
export default function Header({
  isFixed,
  className,
  midSlot
}) {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down(1150));
  const {
    dialogOpen,
    sidenavOpen,
    toggleDialog,
    toggleSidenav
  } = useHeader();
  const CONTENT_FOR_LARGE_DEVICE = <Fragment>
      <FlexBox minWidth={100} alignItems="center">
        <Link href="/" >
          <Image
            alt="Image" 
            width={172}
            height={40}
            style={{ display: 'block' }}
            src="https://cdn-images-1.medium.com/max/750/1*borOwjJZuGASVPyE_Jl6aA.png"
          />
        </Link>

        {isFixed ? <CategoriesMenu /> : null}
      </FlexBox>

        {midSlot}

      <LoginCartButtons toggleDialog={toggleDialog} toggleSidenav={toggleSidenav} />

      <DialogDrawer dialogOpen={dialogOpen} sidenavOpen={sidenavOpen} toggleDialog={toggleDialog} toggleSidenav={toggleSidenav} />
    </Fragment>;
  return <HeaderWrapper className={clsx(className)}>
      <StyledContainer>{downMd ? <MobileHeader /> : CONTENT_FOR_LARGE_DEVICE}</StyledContainer>
    </HeaderWrapper>;
}
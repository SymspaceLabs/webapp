"use client";

import { Fragment, useCallback, useState } from "react";
import { usePathname } from "next/navigation";
import Divider from "@mui/material/Divider"; // GLOBAL CUSTOM COMPONENTS

import Sticky from "../../../components/sticky";
import Topbar from "../../../components/topbar";
import { Footer4 } from "../../../components/footer";
import Header from "../../../components/header";
import NavigationList from "../../../components/navbar/nav-list/nav-list";
import { MobileNavigationBar } from "../../../components/mobile-navigation";
import { Box } from '@mui/material';

export default function ShopLayout3({
  children
}) {
  const pathname = usePathname();
  const [isFixed, setIsFixed] = useState(false);
  const toggleIsFixed = useCallback(fixed => setIsFixed(fixed), []);
  const CENTERED = ["/medical", "/gift-shop", "/grocery-1"];
  const HEADER_SLOT = <div>
      <NavigationList />
    </div>;
  return <Fragment>
 
      <Topbar />
 
      <Sticky fixedOn={0} onSticky={toggleIsFixed} scrollDistance={300}>
        <Header isFixed={isFixed} midSlot={HEADER_SLOT} />
        <Box sx={{ width: '100%', height: '50px', backgroundColor: '#2E2E2E', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '24px', color: '#333', }} />
      </Sticky>

 
      {children}

 
      <MobileNavigationBar />

      {
      /* FOOTER */
    }
      {pathname !== "/grocery-1" ? <Footer4 /> : null}
    </Fragment>;
}
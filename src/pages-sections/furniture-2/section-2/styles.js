"use client";

import styled from "@mui/material/styles/styled";

export const BannerCardWrapper = styled("div")(({ theme }) => ({
  height: "100%",
  minHeight: 220,
  maxHeight: 300,
  borderRadius: 8,
  display: "flex",
  overflow: "hidden",
  position: "relative",
  img: {
    objectFit: "cover",
    height: "100%",
    width: "auto",
    flexShrink: 0,
  },
  ".content": {
    zIndex: 1,
    left: 50,
    top: "50%",
    textAlign: "left",
    position: "absolute",
    transform: "translateY(-50%)",
    [theme.breakpoints.down(574)]: {
      left: 35,
      h6: {
        fontSize: 27,
      },
    },
  },
  ".image": {
    flex: 1,
  },
  ".content-wrapper": {
    flex: 1,
    position: "relative",
  },
  [theme.breakpoints.down(768)]: {
    flexDirection: "column",
    alignItems: "center",
    ".content": {
      position: "relative",
      transform: "none",
      left: 0,
      top: 0,
      textAlign: "center",
      marginBottom: 20,
    },
  },
}));

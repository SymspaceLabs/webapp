'use client'


import { Open_Sans } from "next/font/google";
export const openSans = Open_Sans({
  subsets: ["latin"]
}); // THEME PROVIDER

import ThemeProvider from "../theme/theme-provider"; // PRODUCT CART PROVIDER

import CartProvider from "../contexts/CartContext"; // SITE SETTINGS PROVIDER

import SettingsProvider from "../contexts/SettingContext"; // GLOBAL CUSTOM COMPONENTS

import RTL from "../components/rtl";
import ProgressBar from "../components/progress"; // IMPORT i18n SUPPORT FILE
import { useState, useEffect } from "react";

import "../i18n";
export default function RootLayout({ children }) {

  const [user, setUser] = useState(null);
  // console.log(user);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const response = await fetch(
  //       `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google/callback`, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     if (response.ok) {
  //       const data = await response.json();
  //       setUser(data.user);
  //     } else {
  //       console.error('Failed to fetch user data');
  //     }
  //   };

  //   fetchUser();
  // }, []);

  return <html lang="en" suppressHydrationWarning>
      <body className={openSans.className}>
        <CartProvider>
          <SettingsProvider>
            <ThemeProvider>
              <ProgressBar />
              <RTL>{children}</RTL>
            </ThemeProvider>
          </SettingsProvider>
        </CartProvider>
      </body>
    </html>;
}
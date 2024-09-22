"use client"

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton"; // MUI ICON COMPONENT
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PersonOutline from "@mui/icons-material/PersonOutline"; // CUSTOM ICON COMPONENT
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlined from "../../../icons/ShoppingBagOutlined";
import useCart from "../../../hooks/useCart";
import { useAuth } from '../../../contexts/AuthContext';
import React from 'react';

// ==============================================================
export default function LoginCartButtons({ toggleDialog, toggleSidenav }) {
  const { state } = useCart();
  const ICON_COLOR = { color: "grey.600" };
  const { isAuthenticated, user, token, login, logout } = useAuth();

  const router = useRouter();
  const searchParams = useSearchParams();

  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const userParam = searchParams.get('user');
    const tokenParam = searchParams.get('token');

    if (userParam && tokenParam) {
      const userData = JSON.parse(decodeURIComponent(userParam));
      login(userData, tokenParam);

      // Remove the query parameters from the URL
      router.replace('/marketplace', undefined, { shallow: true });
    }
  }, [searchParams, login, router]);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    handleMenuClose();
    toggleDialog();
  };

  const handleProfile = () => {
    handleMenuClose();
    router.push('/profile');
  }

  const handleLogout = () => {
    logout();
    handleMenuClose();
  };

  return (
    <div>
      <IconButton onClick={toggleDialog}>
        <FavoriteBorderIcon sx={ICON_COLOR} />
      </IconButton>

      <Badge badgeContent={state.cart.length} color="primary">
        <IconButton onClick={toggleSidenav}>
          <ShoppingBagOutlined sx={ICON_COLOR} />
        </IconButton>
      </Badge>

      <IconButton onClick={handleMenuClick}>
        <PersonOutline sx={ICON_COLOR} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}>
      
      {!isAuthenticated ?
          <MenuItem onClick={handleLogin}>Login or Sign up</MenuItem>
        :
          <>
            <MenuItem>{user?.email || 'User'}</MenuItem>
            <MenuItem onClick={handleProfile}>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </>
        }
        
      </Menu>
    </div>
  );
}

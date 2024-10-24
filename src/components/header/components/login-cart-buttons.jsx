"use client"

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Badge from "@mui/material/Badge";
// import IconButton from "@mui/material/IconButton"; // MUI ICON COMPONENT
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
import styled from "@mui/material/styles/styled";
import {IconButton, Button, MenuItem, Avatar, Menu, Box } from "@mui/material";
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
  const open = Boolean(anchorEl);

  const handleClose = () => setAnchorEl(null);

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
      {/* <Button sx={{ fontFamily:'Elemental End', fontSize:'', color:'#fff', background: 'linear-gradient(92.78deg, #3084FF 39.5%, #1D4F99 100%)', border: '1px solid #344767', borderRadius: '8px' }} aria-haspopup="true" onClick={e => setAnchorEl(e.currentTarget)} aria-expanded={open ? "true" : undefined} aria-controls={open ? "account-menu" : undefined}>
        Create New +
      </Button> */}

        <IconButton onClick={toggleDialog}>
         <FavoriteBorderIcon sx={ICON_COLOR} />
       </IconButton>

   <Badge badgeContent={state.cart.length} color="primary">
     <IconButton onClick={toggleSidenav}>
     <ShoppingBagOutlined sx={ICON_COLOR} />
     </IconButton>
   </Badge>

   <IconButton  onClick={e => setAnchorEl(e.currentTarget)} aria-expanded={open ? "true" : undefined} aria-controls={open ? "account-menu" : undefined}>
     <PersonOutline sx={ICON_COLOR} />
   </IconButton>

      <Menu open={open} id="account-menu" anchorEl={anchorEl} onClose={handleClose} onClick={handleClose} transformOrigin={{
      horizontal: "right",
      vertical: "top"
    }} anchorOrigin={{
      horizontal: "right",
      vertical: "bottom"
    }} slotProps={{
      paper: {
        elevation: 0,
        sx: { mt: 1, boxShadow: 2, minWidth: 200, borderRadius: "8px",
          overflow: "visible",
          border: "1px solid",
          borderColor: "grey.200",
          fontFamily:'Elemental End',
          color:'#fff',
          background:'linear-gradient(180deg, rgba(62, 61, 69, 0.48) 0%, rgba(32, 32, 32, 0.64) 100%)',
          "& .MuiMenuItem-root:hover": {
            background:'linear-gradient(92.78deg, #3084FF 39.5%, #1D4F99 100%)'
          },
          "&:before": {
            top: 0,
            right: 14,
            zIndex: 0,
            width: 10,
            height: 10,
            content: '""',
            display: "block",
            position: "absolute",
            borderTop: "1px solid",
            borderLeft: "1px solid",
            borderColor: "grey.200",
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)"
          }
        }
      }
    }}>

       
        {!isAuthenticated ?
          <MenuItem onClick={handleLogin} sx={{fontFamily:'Elemental End', textTransform:'lowercase'}}>Login or Sign up</MenuItem>
        :
          <>
            <MenuItem sx={{fontFamily:'Elemental End', textTransform:'lowercase'}}>{user?.email || 'User'}</MenuItem>
            <MenuItem onClick={handleProfile} sx={{fontFamily:'Elemental End', textTransform:'lowercase'}}>Profile</MenuItem>
            <MenuItem onClick={handleLogout} sx={{fontFamily:'Elemental End', textTransform:'lowercase'}}>Logout</MenuItem>
          </>
        }
      </Menu>
    </div>

    // <div>
    //   <IconButton onClick={toggleDialog}>
    //     <FavoriteBorderIcon sx={ICON_COLOR} />
    //   </IconButton>

    //   <Badge badgeContent={state.cart.length} color="primary">
    //     <IconButton onClick={toggleSidenav}>
    //       <ShoppingBagOutlined sx={ICON_COLOR} />
    //     </IconButton>
    //   </Badge>

    //   <IconButton onClick={handleMenuClick}>
    //     <PersonOutline sx={ICON_COLOR} />
    //   </IconButton>
    //   <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
      
    //   {!isAuthenticated ?
    //       <MenuItem onClick={handleLogin}>Login or Sign up</MenuItem>
    //     :
    //       <>
    //         <MenuItem>{user?.email || 'User'}</MenuItem>
    //         <MenuItem onClick={handleProfile}>Profile</MenuItem>
    //         <MenuItem onClick={handleLogout}>Logout</MenuItem>
    //       </>
    //     }
        
    //   </Menu>
    // </div>
  );
}

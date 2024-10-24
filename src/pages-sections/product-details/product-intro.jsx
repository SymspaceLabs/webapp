"use client";

import Link from "next/link";
import { useState, Fragment } from "react";
// import Chip from "@mui/material/Chip";
// import Grid from "@mui/material/Grid";
// import Avatar from "@mui/material/Avatar";
// import Rating from "@mui/material/Rating";
import { Box, Button, Select, MenuItem, FormControl, InputLabel, Typography, Drawer, Grid, Avatar, Rating } from '@mui/material';
import Clear from "@mui/icons-material/Clear"; // LOCAL CUSTOM COMPONENTS

import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove"; // GLOBAL CUSTOM HOOK

import useCart from "../../hooks/useCart"; // GLOBAL CUSTOM COMPONENTS
import Image from "next/image"; // GLOBAL CUSTOM COMPONENTS

import LazyImage from "../../components/LazyImage";
import { H1, H2, H3, H6, Paragraph } from "../../components/Typography";
import { FlexBox, FlexRowCenter } from "../../components/flex-box"; // CUSTOM UTILS LIBRARY FUNCTION
import Divider from "@mui/material/Divider"; // GLOBAL CUSTOM HOOK

import { currency } from "../../lib"; // DUMMY DATA

import productVariants from "../../data/product-variants"; // CUSTOM DATA MODEL
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { useRouter } from "next/navigation";
import HandBagCanvas from "../../components/HandBagCanvas";

// ================================================================
export default function ProductIntro({ product }) {

  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [isFavorited, setIsFavorited] = useState(false);
  // const { toggleSidenav } = useHeader();

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleSizeSelect = (event) => {
    setSelectedSize(event.target.value);
  };

  const {
    id,
    price,
    title,
    images,
    slug,
    thumbnail,
    brand
  } = product || {};
  const {
    state,
    dispatch
  } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectVariants, setSelectVariants] = useState({
    option: "option 1",
    type: "type 1"
  }); // HANDLE CHANGE TYPE AND OPTIONS

  const handleChangeVariant = (variantName, value) => () => {
    setSelectVariants(state => ({ ...state,
      [variantName.toLowerCase()]: value
    }));
  }; // CHECK PRODUCT EXIST OR NOT IN THE CART


  const cartItem = state.cart.find(item => item.id === id); // HANDLE SELECT IMAGE

  const handleImageClick = ind => () => setSelectedImage(ind); // HANDLE CHANGE CART


  const handleCartAmountChange = amount => () => {
    dispatch({
      type: "CHANGE_CART_AMOUNT",
      payload: {
        price,
        qty: amount,
        name: title,
        imgUrl: thumbnail,
        id,
        slug
      }
    });
  };

  const [sidenavOpen, setSidenavOpen] = useState();
  const toggleSidenav = () => setSidenavOpen(state => !state);


  return (
    <>
      <Grid container spacing={3} justifyContent="space-around">
        
        { /* IMAGE GALLERY AREA */}
        <Grid item md={6} xs={12} alignItems="center">
          <FlexBox justifyContent="center" alignItems="center" position="relative" mb={6}>
            <IconButton 
              onClick={() => setSelectedImage((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
              style={{
                position: "absolute",
                left: 0,
                zIndex: 1,
                backgroundColor: "white",
              }}
            >
              <ArrowBackIosIcon />
            </IconButton>

            {selectedImage === 0 ? (
              <HandBagCanvas />
            ) : (
              <LazyImage 
                alt={title} 
                width={300} 
                height={300} 
                loading="eager" 
                src={product.images[selectedImage]} 
                sx={{ objectFit: "contain" }} 
              />
            )}

            <IconButton 
              onClick={() => setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
              style={{
                position: "absolute",
                right: 0,
                zIndex: 1,
                backgroundColor: "white",
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>

            {/* Heart Icon */}
            <IconButton 
              onClick={toggleFavorite}
              style={{
                position: "absolute",
                top: 8,
                right: 8,
                zIndex: 2,
              }}
            >
              {isFavorited ? (
                <FavoriteIcon color="error" />
              ) : (
                <FavoriteBorderIcon color="action" />
              )}
            </IconButton>
          </FlexBox>

          <FlexBox overflow="auto">
            {images?.length>0 && images.map((url, ind) => (
              <FlexRowCenter 
                key={ind} 
                width={64} 
                height={64} 
                minWidth={64} 
                bgcolor="white" 
                border="1px solid" 
                borderRadius="10px" 
                ml={ind === 0 ? "auto" : 0} 
                style={{ cursor: "pointer" }} 
                onClick={() => setSelectedImage(ind)} 
                mr={ind === images.length - 1 ? "auto" : "10px"} 
                borderColor={selectedImage === ind ? "primary.main" : "grey.400"}
              >
                <Avatar 
                  alt="product" 
                  src={url} 
                  variant="square" 
                  sx={{ height: 40 }} 
                />
              </FlexRowCenter>
            ))}
          </FlexBox>
        </Grid>


        {/* PRODUCT INFO AREA */}
        <Grid item md={6} xs={12} alignItems="center">
          {/* Card 1 */}
          <Box sx={{ p:5, boxSizing: 'border-box', background: 'linear-gradient(117.54deg, rgba(255, 255, 255, 0.5) -19.85%, rgba(235, 235, 235, 0.367354) 4.2%, rgba(224, 224, 224, 0.287504) 13.88%, rgba(212, 212, 212, 0.21131) 27.98%, rgba(207, 207, 207, 0.175584) 37.8%, rgba(202, 202, 202, 0.143432) 44.38%, rgba(200, 200, 200, 0.126299) 50.54%, rgba(196, 196, 196, 0.1) 60.21%)', boxShadow: '0px 1px 24px -1px rgba(0, 0, 0, 0.18)', backdropFilter: 'blur(12px)', borderRadius: "30px" }}>
            {/* PRODUCT BRAND */}
            <H6 sx={{ fontFamily: 'Helvetica', fontSize: 16, textDecoration: 'underline', color: '#0366FE', fontWeight: 400}}>
              {brand}
            </H6>
            
            {/* PRODUCT NAME */}
            <H1 sx={{ fontFamily: 'Elemental End', fontSize:40,  color: '#000', textTransform: 'lowercase', }} mb={1}>
              {title}
            </H1>

            {/* PRODUCT RATING */}
            <FlexBox alignItems="center" gap={1} mb={2}>
              <Rating color="warn" value={4} readOnly />
              <H6 sx={{ fontFamily: 'Helvetica', fontWeight: 400 }} lineHeight="1">(50)</H6>
            </FlexBox>

            {/* PRICE & STOCK */}
            <FlexBox alignItems="center" gap={1} mb={2}>
              <H2 color="primary.main" mb={0.5} lineHeight="1" sx={{ fontFamily: 'Helvetica', fontWeight: 700, fontSize: "32px", color: '#000000' }}>
                {currency(price)}
              </H2>
              <H6 sx={{ fontFamily: 'Helvetica', fontWeight: 400, fontSize: '24px', color: '#A0A0A0', textDecoration: 'line-through' }} lineHeight="1">
                $50
              </H6>
            </FlexBox>


            {/* PRODUCT VARIANTS */}

            {/*Color*/}
            <FlexBox alignItems="center" gap={1}  mb={2}>
                <H6 mb={1} sx={{fontFamily: 'Helvetica', fontWeight: 400, fontSize: '24px', color: '#353535'}}>
                  Select Color
                </H6>

                {colors.map((color) => (
                  <Button
                    key={color}
                    onClick={() => handleColorSelect(color)}
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: color,
                      border: selectedColor === color ? '3px solid black' : '1px solid grey',
                      margin: '0 5px',
                    }}
                  />
                ))}
            </FlexBox>

            {/*Size*/}
            <FlexBox gap={1} mb={2} sx={{ alignItems: 'center' }}>
              <H6 
                mb={1} 
                sx={{
                  fontFamily: 'Helvetica', 
                  fontWeight: 400, 
                  fontSize: '24px', 
                  color: '#353535',
                }}>
                Size
              </H6>

              <FormControl sx={{ flexGrow: 1, width:'100%' }}>
                <InputLabel id="size-select-label">Size</InputLabel>
                <Select
                  labelId="size-select-label"
                  id="size-select"
                  value={selectedSize}
                  label="Size"
                  onChange={handleSizeSelect}
                  fullWidth
                >
                  {sizes.map((size) => (
                    <MenuItem key={size} value={size}>
                      {size}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Button
                sx={{
                  padding: "16px 9px",
                  border: "1px solid #000000",
                  borderRadius: "8px",
                  fontFamily: 'Helvetica',
                  fontWeight: 700,
                  fontSize: '14px',
                  color: '#000',
                  flexGrow: 1,
                  width:'100%'
                }}>
                Personalized Sizing
              </Button>
            </FlexBox>

            

            {/* {productVariants.map(variant => <FlexBox alignItems="center" gap={1} key={variant.id} mb={2}>
                <H6 mb={1} sx={{fontFamily: 'Helvetica', fontWeight: 400, fontSize: '24px', color: '#353535'}}>
                  {variant.title}
                </H6>

                {variant.values.map(({id,value}) => 
                    <Chip
                      key={id}
                      label={value}
                      onClick={handleChangeVariant(variant.title, value)}
                      sx={{borderRadius: "4px", mr: 1, cursor: "pointer"}}
                      color={selectVariants[variant.title.toLowerCase()] === value ? "primary" : "default"}
                    />
                  )
                }
              </FlexBox>)} */}
              <FlexBox justifyContent="flex-end" >
                <Button onClick={()=>setSidenavOpen(true)} sx={{ fontSize:8, padding: "8px", borderRadius: "50px", background:'#52647D', fontFamily: 'Elemental End', color:'#fff', textTransform: 'lowercase', fontWeight: 400 }} color="primary" variant="contained">
                  Size chart
                </Button>
              </FlexBox>
            

            {/* ADD TO CART BUTTON */}
            <FlexBox alignItems="center" gap={1}  mb={2} mt={2}>
              <Button sx={{ padding: "16px 56px", border: "1px solid #000000", borderRadius: "50px", background:'transparent', fontFamily: 'Elemental End', color:'#000', textTransform: 'lowercase', fontWeight: 400 }} color="primary" variant="contained" onClick={handleCartAmountChange(1)}>
                Add to Cart
              </Button>

              <Button sx={{ padding: "16px 56px", borderRadius: "50px", background:'#000', fontFamily: 'Elemental End', color:'#fff', textTransform: 'lowercase', fontWeight: 400 }} color="primary" variant="contained" onClick={handleCartAmountChange(1)}>
                Buy now
              </Button>
            </FlexBox>




            {/* {!cartItem?.qty ? <Button color="primary" variant="contained" onClick={handleCartAmountChange(1)} sx={{
            mb: 4.5,
            px: "1.75rem",
            height: 40
          }}>
                Add to Cart
              </Button> : <FlexBox alignItems="center" mb={4.5}>
                <Button size="small" sx={{
              p: 1
            }} color="primary" variant="outlined" onClick={handleCartAmountChange(cartItem?.qty - 1)}>
                  <Remove fontSize="small" />
                </Button>

                <H3 fontWeight="600" mx={2.5}>
                  {cartItem?.qty.toString().padStart(2, "0")}
                </H3>

                <Button size="small" sx={{
              p: 1
            }} color="primary" variant="outlined" onClick={handleCartAmountChange(cartItem?.qty + 1)}>
                  <Add fontSize="small" />
                </Button>
              </FlexBox>} */}



          </Box>

          {/* Card 2 */}
          {/* <Box sx={{ mt:2, p:5, boxSizing: 'border-box', background: 'linear-gradient(117.54deg, rgba(255, 255, 255, 0.5) -19.85%, rgba(235, 235, 235, 0.367354) 4.2%, rgba(224, 224, 224, 0.287504) 13.88%, rgba(212, 212, 212, 0.21131) 27.98%, rgba(207, 207, 207, 0.175584) 37.8%, rgba(202, 202, 202, 0.143432) 44.38%, rgba(200, 200, 200, 0.126299) 50.54%, rgba(196, 196, 196, 0.1) 60.21%)', boxShadow: '0px 1px 24px -1px rgba(0, 0, 0, 0.18)', backdropFilter: 'blur(12px)', borderRadius: "30px" }}>
            <H1 sx={{ fontFamily: 'Elemental End', fontSize: '24px',  color: '#000', textTransform: 'lowercase', color: '#353535', fontWeight: 400, }} mb={1}>
              Product Details
            </H1>
            <H6 sx={{ fontFamily: 'Helvetica', fontWeight: 400, fontSize: '24px', color: '#A0A0A0', mb:1 }} lineHeight="1">
              Material:
            </H6>
            <H6 sx={{ fontFamily: 'Helvetica', fontWeight: 400, fontSize: '24px', color: '#A0A0A0', mb:1 }} lineHeight="1">
              Care Instructions:
            </H6>
            <H6 sx={{ fontFamily: 'Helvetica', fontWeight: 400, fontSize: '24px', color: '#A0A0A0', mb:1 }} lineHeight="1">
              Product fit:
            </H6>
            <H6 sx={{ fontFamily: 'Helvetica', fontWeight: 400, fontSize: '24px', color: '#A0A0A0', mb:1 }} lineHeight="1">
              Origin:
            </H6>
          </Box> */}

          <Box sx={{ mt: 2, p: 2, boxSizing: 'border-box', background: 'linear-gradient(117.54deg, rgba(255, 255, 255, 0.5) -19.85%, rgba(235, 235, 235, 0.367354) 4.2%, rgba(224, 224, 224, 0.287504) 13.88%, rgba(212, 212, 212, 0.21131) 27.98%, rgba(207, 207, 207, 0.175584) 37.8%, rgba(202, 202, 202, 0.143432) 44.38%, rgba(200, 200, 200, 0.126299) 50.54%, rgba(196, 196, 196, 0.1) 60.21%)', boxShadow: '0px 1px 24px -1px rgba(0, 0, 0, 0.18)', backdropFilter: 'blur(12px)', borderRadius: "30px" }}>
            <Accordion sx={{ background: 'transparent', boxShadow: 'none' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <H1 sx={{ fontFamily: 'Elemental End', fontSize: '24px', color: '#353535', fontWeight: 400, textTransform: 'lowercase', }}>
                  Product Details
                </H1>
              </AccordionSummary>
              <AccordionDetails>
                <H6 sx={{ fontFamily: 'Helvetica', fontWeight: 400, fontSize: '24px', color: '#A0A0A0', mb:1 }} lineHeight="1">
                  Material:
                </H6>
                <H6 sx={{ fontFamily: 'Helvetica', fontWeight: 400, fontSize: '24px', color: '#A0A0A0', mb:1 }} lineHeight="1">
                  Care Instructions:
                </H6>
                <H6 sx={{ fontFamily: 'Helvetica', fontWeight: 400, fontSize: '24px', color: '#A0A0A0', mb:1 }} lineHeight="1">
                  Product fit:
                </H6>
                <H6 sx={{ fontFamily: 'Helvetica', fontWeight: 400, fontSize: '24px', color: '#A0A0A0', mb:1 }} lineHeight="1">
                  Origin:
                </H6>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box sx={{ mt: 2, p: 2, boxSizing: 'border-box', background: 'linear-gradient(117.54deg, rgba(255, 255, 255, 0.5) -19.85%, rgba(235, 235, 235, 0.367354) 4.2%, rgba(224, 224, 224, 0.287504) 13.88%, rgba(212, 212, 212, 0.21131) 27.98%, rgba(207, 207, 207, 0.175584) 37.8%, rgba(202, 202, 202, 0.143432) 44.38%, rgba(200, 200, 200, 0.126299) 50.54%, rgba(196, 196, 196, 0.1) 60.21%)', boxShadow: '0px 1px 24px -1px rgba(0, 0, 0, 0.18)', backdropFilter: 'blur(12px)', borderRadius: "30px" }}>
            <Accordion sx={{ background: 'transparent', boxShadow: 'none' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <H1 sx={{ fontFamily: 'Elemental End', fontSize: '24px', color: '#353535', fontWeight: 400, textTransform: 'lowercase', }}>
                  Composition
                </H1>
              </AccordionSummary>
              <AccordionDetails>
                <H6 sx={{ fontFamily: 'Helvetica', fontWeight: 400, fontSize: '16px', color: '#000' }}>
                  {/* Add the product details content here */}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                </H6>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box sx={{ mt: 2, p: 2, boxSizing: 'border-box', background: 'linear-gradient(117.54deg, rgba(255, 255, 255, 0.5) -19.85%, rgba(235, 235, 235, 0.367354) 4.2%, rgba(224, 224, 224, 0.287504) 13.88%, rgba(212, 212, 212, 0.21131) 27.98%, rgba(207, 207, 207, 0.175584) 37.8%, rgba(202, 202, 202, 0.143432) 44.38%, rgba(200, 200, 200, 0.126299) 50.54%, rgba(196, 196, 196, 0.1) 60.21%)', boxShadow: '0px 1px 24px -1px rgba(0, 0, 0, 0.18)', backdropFilter: 'blur(12px)', borderRadius: "30px" }}>
            <Accordion sx={{ background: 'transparent', boxShadow: 'none' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <H1 sx={{ fontFamily: 'Elemental End', fontSize: '24px', color: '#353535', fontWeight: 400, textTransform: 'lowercase', }}>
                  Brand
                </H1>
              </AccordionSummary>
              <AccordionDetails>
                <H6 sx={{ fontFamily: 'Helvetica', fontWeight: 400, fontSize: '16px', color: '#000' }}>
                  {/* Add the product details content here */}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                </H6>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box sx={{ mt: 2, p: 2, boxSizing: 'border-box', background: 'linear-gradient(117.54deg, rgba(255, 255, 255, 0.5) -19.85%, rgba(235, 235, 235, 0.367354) 4.2%, rgba(224, 224, 224, 0.287504) 13.88%, rgba(212, 212, 212, 0.21131) 27.98%, rgba(207, 207, 207, 0.175584) 37.8%, rgba(202, 202, 202, 0.143432) 44.38%, rgba(200, 200, 200, 0.126299) 50.54%, rgba(196, 196, 196, 0.1) 60.21%)', boxShadow: '0px 1px 24px -1px rgba(0, 0, 0, 0.18)', backdropFilter: 'blur(12px)', borderRadius: "30px" }}>
            <Accordion sx={{ background: 'transparent', boxShadow: 'none' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <H1 sx={{ fontFamily: 'Elemental End', fontSize: '24px', color: '#353535', fontWeight: 400, textTransform: 'lowercase', }}>
                  Size and fit
                </H1>
              </AccordionSummary>
              <AccordionDetails>
                <H6 sx={{ fontFamily: 'Helvetica', fontWeight: 400, fontSize: '16px', color: '#000' }}>
                  {/* Add the product details content here */}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                </H6>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>
      </Grid>
      <Fragment>
        <Drawer open={sidenavOpen} anchor="right" onClose={toggleSidenav} sx={{ zIndex: 9999 }}>
          <MiniCart toggleSidenav={toggleSidenav} />
        </Drawer>
      </Fragment>
    </>
    
  );
}

function MiniCart({toggleSidenav}) {
  const { push } = useRouter();
 
  const handleNavigate = path => () => {
    toggleSidenav();
    push(path);
  };

  return <Box width="100%" minWidth={380}>
      {
      /* HEADING SECTION */
    }
      {/* <TopHeader toggle={toggleSidenav} total={10} /> */}
      <FlexBox justifyContent="space-between" mx={3} height={74}>
        <FlexBox gap={1} alignItems="center" color="secondary.main">
          <Paragraph lineHeight={0} fontWeight={600}>
            Size guide
          </Paragraph>
        </FlexBox>

        <IconButton onClick={toggleSidenav}>
          <Clear />
        </IconButton>
      </FlexBox>

      <Divider />

      <Box height={`calc(100vh - 75px)`}>
        { /* CART ITEM LIST */ }
        <FlexBox alignItems="center" flexDirection="column" justifyContent="center" height="calc(100% - 74px)">
          <LazyImage 
            alt="Size Guide"
            width={200} 
            height={200} 
            loading="eager" 
            src="https://i.shgcdn.com/a354927b-248e-4974-8237-57584f71abb9/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            sx={{ objectFit: "contain" }} 
          />
        </FlexBox>
      </Box>

      {/* CART BOTTOM ACTION BUTTONS */}
      {/* {cartList.length > 0 ? <BottomActions total={currency(getTotalPrice())} handleNavigate={handleNavigate} /> : null} */}
    </Box>;
}

const colors = ['#000', '#686868', '#0C3779', '#E1B000', '#E8E8E8'];
const sizes = ['S', 'M', 'L', 'XL'];
import { styled } from '@mui/material/styles';
import { Box, Typography, Button, Grid } from '@mui/material';

// Styled components for Section2
export const StyledGrid = styled(Grid)(({ theme }) => ({
  background: '#EDEDED',
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  position: 'relative',
}));

export const SectionBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(5),
}));

export const TitleText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Helvetica',
  color: '#4E4E4E',
  fontSize: 55,
  fontWeight: 'bold',
}));

export const DescriptionText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Helvetica',
  color: '#909090',
  fontSize: 16,
}));

export const ShopButton = styled(Button)(({ theme }) => ({
  fontFamily: 'Elemental End',
  textTransform: 'lowercase',
  color: '#fff',
  background: '#000',
  borderRadius: '50px',
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  paddingLeft: theme.spacing(7.5),
  paddingRight: theme.spacing(7.5),
}));

// Styled components for Floating Images
export const FloatingImage1 = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: 0,
  transform: 'translateY(-60%) rotate(10deg)',
  zIndex: 10,
  width: '40%',
  height: 'auto',
  [theme.breakpoints.down('sm')]: {
    display: 'none', // Hidden on mobile
  },
}));

export const FloatingImage2 = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '75%',
  right: 50,
  transform: 'translateY(-50%) rotate(10deg)',
  zIndex: 10,
  width: '25%',
  height: 'auto',
  [theme.breakpoints.down('sm')]: {
    display: 'none', // Hidden on mobile
  },
}));

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
  alignItems: 'center',
}));

export const TitleText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Helvetica',
  color: '#4E4E4E',
  fontSize: 72,
  fontWeight: 'bold',
}));

export const DescriptionText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Helvetica',
  color: '#909090',
  fontSize: 16,
  textAlign: 'justify',
  maxWidth: 900,
}));

export const PartnerButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  backgroundColor: '#000',
  borderRadius: '50px',
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  paddingLeft: theme.spacing(7.5),
  paddingRight: theme.spacing(7.5),
  fontFamily: 'Elemental End',
  textTransform: 'lowercase',
}));

// Styled components for Floating Images
export const FloatingImage1 = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: 0,
  transform: 'translateY(-50%)',
  zIndex: 10,
  width: '25%',
  height: 'auto',
  [theme.breakpoints.down('md')]: {
    display: 'none', // Hidden on mobile
  },
}));

export const FloatingImage2 = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '100%',
  right: 50,
  transform: 'translateY(-50%) rotate(10deg)',
  zIndex: 10,
  width: '20%',
  height: 'auto',
  [theme.breakpoints.down('md')]: {
    display: 'none', // Hidden on mobile
  },
}));

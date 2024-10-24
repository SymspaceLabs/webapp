export const styles = {
    gridContainer: {
      position: 'relative',
      background: '#1F1F1F',
    },
    container: {
      position: 'relative',
    },
    blobCircle: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: { xs: '300px', sm: '400px', md: '500px' }, // Adjust width for mobile
      height: { xs: '300px', sm: '400px', md: '500px' }, // Adjust height for mobile
      background: '#FFFFFF',
      borderRadius: '50%',
      zIndex: 1,
      opacity: 0.3,
      filter: 'blur(80px)', // Slightly reduce blur for smaller screens
    },
    contentBox: {
      minHeight: { xs: '400px', md: '600px' }, // Adjust height for mobile
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      py: { xs: 4, md: 8 }, // Adjust padding for mobile
      alignItems: 'flex-start', // Align content to the right
      justifyContent: 'center',
    },
    titleText: {
      width: '100%',
      maxWidth: 1200,
      fontFamily: 'Helvetica',
      color: '#fff',
      fontSize: { xs: 24, sm: 32, md: 48, lg: 60, xl: 72 }, // Responsive font sizes
      fontWeight: 'bold',
      textAlign: 'left', // Align text to the right
    },
    descriptionText: {
      maxWidth: 1200,
      fontFamily: 'Helvetica',
      color: '#fff',
      fontSize: { xs: 14, sm: 16 }, // Responsive font sizes
      px: { xs: 2, sm: 0 }, // Add padding for mobile
      textAlign: 'left', // Align text to the right
    },
    buttonContainer: {
      width: '100%',
      maxWidth: 1200,
      display: 'flex',
      justifyContent: 'flex-start', // Align button to the right
    },
    learnMoreButton: {
      fontFamily: 'Elemental End',
      textTransform: 'lowercase',
      color: '#fff',
      borderRadius: '50px',
      py: 2,
      px: { xs: 5, sm: 7.5 }, // Adjust padding for mobile
    },
  };
//import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import './footer.css';

const Footer = () => {
  return (
    
    <Box className="footer">
      <Container maxWidth="sm">
        <Typography variant="body1">
          &copy; {new Date().getFullYear()} HydroHero. All rights reserved.
        </Typography>
        <Typography variant="body2">
          Stay Hydrated, Stay Hero
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;

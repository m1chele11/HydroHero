//import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import WaterDropTwoToneIcon from '@mui/icons-material/WaterDropTwoTone';
import './hero.css';

const HeroSection = () => {
  return (
    <Box className="hero-section">
      <Container maxWidth="sm" className="hero-content">
        <div>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to HydroHero!
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Track your water intake effortlessly.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className="get-started-button"
            startIcon={<WaterDropTwoToneIcon />}
          >
            Get Started
          </Button>
        </div>
      </Container>
    </Box>
  );
}

export default HeroSection;


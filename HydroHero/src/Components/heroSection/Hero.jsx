import { Container, Typography, Box, Button } from '@mui/material';
import WaterDropTwoToneIcon from '@mui/icons-material/WaterDropTwoTone';
import { useNavigate } from 'react-router-dom';
import './hero.css';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/signup');
  }

  return (
    <Box className="hero-section">
      <div className="drop drop-left"></div>
      <div className="drop drop-right"></div>
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
            onClick={handleGetStartedClick}
          >
            Get Started
          </Button>
        </div>
      </Container>
    </Box>
  );
}

export default HeroSection;

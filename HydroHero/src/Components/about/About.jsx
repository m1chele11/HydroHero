import { Container, Typography, Box, Paper } from '@mui/material';
import WaterDropTwoToneIcon from '@mui/icons-material/WaterDropTwoTone';
import './about.css';

const About = () => {

  return (
    <Box className="about-section">
      <div className="slogan-container">
        <div className="drop drop1"></div>
        <div className="drop drop3"></div> {/* Add the third drop */}
        <div className="text-c">
          <Typography variant="h1" color="black" style={{ fontWeight: 'bold' }}>
             Stay Hydrated. Stay Hero.
          </Typography>
        </div>
      </div>

      <Container maxWidth="md" className="about-content">
        <Paper elevation={3} className="about-paper">
          <Box display="flex" flexDirection="column" alignItems="center" p={3}>
            <WaterDropTwoToneIcon color="primary" fontSize="large" />
            <Typography variant="h4" component="h1" gutterBottom color="black" >
              About Us
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
            At HydroHero, we are all about making hydration simple and enjoyable. Our app is designed to help you effortlessly track your daily water intake and stay on top of your hydration goals. With friendly reminders, progress tracking, and fun challenges, HydroHero turns drinking water into an easy and rewarding habit. Say goodbye to the hassle of manual logging and let us help you make staying hydrated a natural part of your daily routine where you can always feel your best.            </Typography>
            <Typography variant="body1" component="p" gutterBottom color="#1976d2" style={{ fontWeight: 'bold' }}>
              Be the Hero of your Hydration
            </Typography>
          </Box>
        </Paper>
        <div className="drop drop2"></div>
      </Container>
    </Box>

  );
}

export default About;

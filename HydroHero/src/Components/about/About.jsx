// import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import WaterDropTwoToneIcon from '@mui/icons-material/WaterDropTwoTone';
import './about.css';

const About = () => {
  return (
    
    <Box className="about-section">
      <Container maxWidth="md" className="about-content">
        <Paper elevation={3} className="about-paper">
          <Box display="flex" flexDirection="column" alignItems="center" p={3}>
            <WaterDropTwoToneIcon color="primary" fontSize="large" />
            <Typography variant="h4" component="h1" gutterBottom>
              About HydroHero
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              HydroHero is your ultimate companion for tracking your water intake effortlessly. Our mission is to help you stay hydrated and maintain a healthy lifestyle by providing an easy-to-use and intuitive platform.
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              With HydroHero, you can set daily water intake goals, track your progress, and get reminders to drink water throughout the day. Join us on this journey to better hydration and health!
            </Typography>
          </Box>
        </Paper>

        <Paper elevation={3} className="about-paper">
          <Box display="flex" flexDirection="column" alignItems="center" p={3}>
            <WaterDropTwoToneIcon color="primary" fontSize="large" />
            <Typography variant="h4" component="h1" gutterBottom>
              About HydroHero
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              HydroHero is your ultimate companion for tracking your water intake effortlessly. Our mission is to help you stay hydrated and maintain a healthy lifestyle by providing an easy-to-use and intuitive platform.
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              With HydroHero, you can set daily water intake goals, track your progress, and get reminders to drink water throughout the day. Join us on this journey to better hydration and health!
            </Typography>
          </Box>
        </Paper>

      </Container>
    </Box>

    
  );
}

export default About;

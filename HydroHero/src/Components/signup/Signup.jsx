// import React from 'react';
import { Container, Typography, Box, TextField, Button, Paper, Grid } from '@mui/material';
import WaterDropTwoToneIcon from '@mui/icons-material/WaterDropTwoTone';
import './signUp.css';
import { Link } from 'react-router-dom';
import backgroundVideo from '../../Assets/video.mp4'; // Adjust the path as necessary

const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle sign-up logic here
  };

  return (
    <Box className="signup-section">
      <video autoPlay loop muted className="video-background">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Container maxWidth="sm" className="signup-content">
        <Paper elevation={3} className="signup-paper">
          <Box display="flex" flexDirection="column" alignItems="center" p={3}>
            <WaterDropTwoToneIcon color="primary" fontSize="large" />
            <Typography variant="h4" component="h1" gutterBottom>
              Sign Up to HydroHero
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="submit-button"
                  >
                    Sign Up
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" align="center">
                    Already have an account? <Link to="/signin">Sign In</Link>
                  </Typography>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default SignUp;


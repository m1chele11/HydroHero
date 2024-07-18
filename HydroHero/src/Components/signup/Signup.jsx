//import React from 'react';
import { Container, Typography, Box, TextField, Button, Paper } from '@mui/material';
import WaterDropTwoToneIcon from '@mui/icons-material/WaterDropTwoTone';
import './signUp.css';

const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle sign-up later in heree
  };

  return (
    <Box className="signup-section">
      <Container maxWidth="sm" className="signup-content">
        <Paper elevation={3} className="signup-paper">
          <Box display="flex" flexDirection="column" alignItems="center" p={3}>
            <WaterDropTwoToneIcon color="primary" fontSize="large" />
            <Typography variant="h4" component="h1" gutterBottom>
              Sign Up to HydroHero
            </Typography>
            <form onSubmit={handleSubmit}>
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="submit-button"
              >
                Sign Up
              </Button>
            </form>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default SignUp;

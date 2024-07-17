//import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import './header.css';

const Header = () => {
  return (
    <AppBar position="static" className="header">
      <Toolbar>
        <Typography variant="h6" component="div" className="title">
          HydroHero
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

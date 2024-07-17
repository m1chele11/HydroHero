//import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import './header.css'; // Import your CSS file

const Header = () => {
  return (
    <AppBar position="static" className="header">
      <Toolbar>
        <div className="header-left">
          <Typography variant="h6" component="div" className="title">
            <div className='hydro'>
              HydroHero
            </div>
          </Typography>
        </div>
        <div className='header-right'>
          <a href='#home'>Home</a>
          <a href='#contact'>Contact</a>
          <a href='#about'>About</a>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

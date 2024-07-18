//import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './header.css';

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
          <Link to='/' className='nav-link'>Home</Link>
          <Link to='/contact' className='nav-link'>Contact</Link>
          <Link to='/about' className='nav-link'>About</Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;


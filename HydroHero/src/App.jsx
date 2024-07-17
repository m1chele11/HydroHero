//import React from 'react';
import Hero from './Components/heroSection/Hero';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import About from './Components/about/About';

import './App.css';




const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <Footer />
      <About/>
    </div>
  );
}

export default App;

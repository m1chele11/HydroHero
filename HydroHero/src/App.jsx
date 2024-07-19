import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Components/heroSection/Hero';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import About from './Components/about/About';
import SignUp from './Components/signup/Signup';
import SignIn from './Components/sign-in/Signin';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React, { useEffect } from 'react';
import './App.css';
// import NavBar from './components/NavBar/NavBar'; 
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import SocialBar from './components/SocialBar/SocialBar'
import './components/NavBar/NavBar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo from './images/MN1.png';
import {BrowserRouter as Router } from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css';
import ScrollTopArrow from './components/ScrollTopArrow'


function App() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <>
      <Router>

        <div className="Home">
        <div className="navbar">
          <div className="navbar-left">
            <img data-aos="fade-down" className="logo" src={Logo} alt="logo" width="130px"/> 
            </div>
              <div className="navbar-right">
                <AnchorLink href='#header'>HOME</AnchorLink>
                <AnchorLink href='#about'>ABOUT</AnchorLink>
                <AnchorLink href='#projects'>PROJECTS</AnchorLink>
                <a href='https://maryann-navarrete.medium.com/' target="_blank" rel="noreferrer">BLOG</a>
                <AnchorLink href='#contact'>CONTACT</AnchorLink>
              </div>
          </div>
  
    
            {/* <NavBar /> */}
          <SocialBar />
          <ScrollTopArrow />
            <section id='header'><Header /></section>
            <section id='about'><About/></section>
            <section id='projects'><Projects/></section>
            <section id='contact'><Contact/></section>
              {/* <Header /> */}
              {/* <About /> */}
              {/* <Projects /> */}
              {/* <Contact /> */}
    
  
      
        </div>
      </Router>

      </>
  );
}

export default App;

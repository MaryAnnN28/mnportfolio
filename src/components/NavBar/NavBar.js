import React, { Component } from 'react';
import './NavBar.css'; 
import Logo from '../../images/mn-logo.png';
import { IconContext } from 'react-icons';
import { FaLinkedinIn, FaGithub, FaMediumM, FaTwitter, FaInstagram } from 'react-icons/fa';

class NavBar extends Component {
  render() {
    return (
      <IconContext.Provider value={{color: '#768eb3'}}>

      <div className="navbar">
        <div className="navbar-left">
          <img src={Logo} alt="logo" width="130px"/> 
        </div>

        <div className="navbar-center">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>

        <div className="navbar-right">
            <FaLinkedinIn size={25}/> &nbsp; &nbsp; 
            <FaGithub size={25} /> &nbsp; &nbsp; 
            <FaMediumM size={25} /> &nbsp; &nbsp;
            <FaInstagram size={25} /> &nbsp; &nbsp; 
            <FaTwitter size={25} />

        </div>

      </div>
      </IconContext.Provider>
    )
  }; 
};

export default NavBar; 
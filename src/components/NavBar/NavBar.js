import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 
import Logo from '../../images/MN1.png';
import { IconContext } from 'react-icons';
import { FaLinkedinIn, FaGithub, FaMediumM, FaTwitter } from 'react-icons/fa';

class NavBar extends Component {
  render() {
    return (
      <IconContext.Provider value={{color: 'rgb(212, 91, 109)'}}>

      <div className="navbar">
        <div className="navbar-left">
          <img src={Logo} alt="logo" width="130px"/> 
        </div>

        <div className="navbar-center">
          <Link to='/'>HOME</Link>
          <Link to='/about'>ABOUT</Link>
          <Link to='/projects'>PROJECTS</Link>
          <Link to='https://maryann-navarrete.medium.com/'>BLOG</Link>
          <Link to='/contact'>CONTACT</Link>
         
        </div>

          <div className="navbar-right">
            <FaLinkedinIn size={25}/> &nbsp; &nbsp; 
            <FaGithub size={25} /> &nbsp; &nbsp; 
            <Link to='https://github.com/MaryAnnN28'>
              <FaMediumM size={25} /> &nbsp; &nbsp;
            </Link>
            <FaTwitter size={25} />

        </div>

      </div>
      </IconContext.Provider>
    )
  }; 
};

export default NavBar; 
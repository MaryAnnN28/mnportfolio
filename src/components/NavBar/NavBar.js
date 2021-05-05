import React, { Component } from 'react';
import './NavBar.css'; 
import Logo from '../../images/MN1.png';


class NavBar extends Component {
  render() {
    return (


      <div className="navbar">
        <div className="navbar-left">
          <img src={Logo} alt="logo" width="130px"/> 
        </div>

        {/* <div className="navbar-right">
          <Link to='/'>HOME</Link>
          <Link to='/about'>ABOUT</Link>
          <Link to='/projects'>PROJECTS</Link>
          <Link to='https://maryann-navarrete.medium.com/'>BLOG</Link>
          <Link to='/contact'>CONTACT</Link>
         
        </div> */}


      </div>
   
    )
  }; 
};

export default NavBar; 
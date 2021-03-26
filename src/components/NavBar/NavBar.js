import React from 'react'
import { Nav, NavLink, NavMenu, Bars } from './NavBarElements'; 

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src="" alt=""/>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/projects" activeStyle>
            Projects
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  )
}

export default NavBar

import React from 'react'
import { Nav, NavLink, NavMenu, Bars, NavBtn, NavBtnLink } from './NavBarElements';



const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>MN</h1>
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
          <NavLink to="/skills" activeStyle>
            Skills
          </NavLink>
        </NavMenu>
     
      
     </Nav>
    </>
  )
}

export default NavBar; 
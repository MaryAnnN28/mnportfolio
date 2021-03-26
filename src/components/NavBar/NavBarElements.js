import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components'; 

export const Nav = styled.nav`
  background: #00010D;
  height: 80px;
  display: flex;
  justifyContent: flex-start;
  padding: 0.5rem cal((100vw - 1000px) / 2);
  z-index: 10; 
`

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decordation: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #fff; 
  }
`

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer; 
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  
  @media screen and (max-width: 768px) {
    display: none; 
  }
`


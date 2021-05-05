import React from 'react'
import './SocialBar.css'
import { IconContext } from 'react-icons';
import { FaLinkedinIn, FaGithub, FaMediumM, FaTwitter } from 'react-icons/fa';

const SocialBar = () => {
  return (
    <>
      <IconContext.Provider value={{color: 'rgb(123, 187, 199)'}}></IconContext.Provider>
      <div class="icon-bar">
            <a href="https://www.linkedin.com/in/maryannnavarrete/">
              <FaLinkedinIn size={25} />
            </a>
            <a href="https://github.com/MaryAnnN28">
              <FaGithub size={25} /> 
            </a>
            <a href="https://maryann-navarrete.medium.com/">
              <FaMediumM size={25} /> 
            </a>
            <a href="https://twitter.com/MaryAnnN28">
              <FaTwitter size={25} />
            </a>
        
      </div>
    </>
  )
}

export default SocialBar

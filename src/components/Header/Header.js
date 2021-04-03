import React from 'react'
import './Header.css';
import { IconContext } from 'react-icons'; 
import { BsChevronCompactDown } from 'react-icons/bs'; 

const Header = () => {
  return (
    <IconContext.Provider value={{color: 'rgb(212, 91, 109)'}}>
    <div
      style={{
        display: 'flex',
        height: '110vh'
      }}
    >
      <div className="header-container">
        
        <div className="header-container-left">
          <div className="main-header">
  
            <h1 className="main-h1">
              Building Enhanced
              Digital Experiences
            </h1>
            <h3 className="header-firstname-h3"> Meet MaryAnn</h3>
            {/* <h4 className="header-title-h4"> software engineer</h4>
            <h4 className="header-title2-h4"> web designer</h4> */}
       
            
          </div>
        </div>

        <div className="header-container-right">
        
       
        </div>
            
          <div className="scroll-icon">
            <BsChevronCompactDown size={45} /><br/>
          </div>

      </div>

      
    </div>
    </IconContext.Provider>
  )
}

export default Header; 

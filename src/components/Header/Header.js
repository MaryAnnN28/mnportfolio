import React from 'react'
import './Header.css';

const Header = () => {
  return (

    <div
      style={{
        display: 'flex',
        height: '100vh'
      }}
    >
      <div className="header-container">
        
        <div className="header-container-left">
          <div className="main-header">
            <h1 className="main-h1">
              Building Enhanced
              Digital Experiences
            </h1>
  
            <h3 className="main-h3">
              Meet MaryAnn
            </h3>
          </div>
        </div>

        <div className="header-container-right">
          <div className="circleBase circle1"></div>
          <div className="circleBase circle2"></div>
        </div>

      </div>

      
    </div>

  )
}

export default Header; 

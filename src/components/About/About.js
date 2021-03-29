import React from 'react'
import './About.css'; 

const About = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '120vh'
      }}
    >
      <div className="about-container">
        
        <div className="about-container-left">
          <div className="about-content">
            <h1 className="about-header">
              About
            </h1>
  
            <p className="about-text">
              Hi I'm Mary Ann 
            </p>
          </div>
        </div>

        <div className="header-container-right">
          
        </div>

      </div>

      
    </div>
  )
}

export default About

import React from 'react'
import './About.css';
import Pic from '../../images/headshot1.jpg'
import Pic2 from '../../images/headshot2.jpg'
import Pic3 from '../../images/headshot3.png'

const About = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh'
      }}
    >
      <div className="about-container">
        
        <div className="about-container-left">
          <div className="about-content">
            <h1 className="about-header">
              About
            </h1>
  
            <p className="about-text">
            Hello! I’m Mary Ann Navarrete, a full-stack software engineer based in the Washington, DC area. I enjoy building things that provide solutions and efficiency, while creating insightful, dynamic user experiences with a pop of style. 
            </p>
            <p className="about-text">
            My background comes from 15 years of sales and marketing leadership in the hospitality and travel industry. Some of my expertise are working with Government clients, e-commerce marketing, and adding creative touches to any work I do. 
            </p>
            <p className="about-text">
            Part problem-solver that loves data-driven analysis, part design maven with an eye for styling, I get to enjoy the best of both worlds tapping into both my passions as a full stack developer. 
            </p>
          </div>
        </div>

        <div className="about-container-right">
          <img className="pic" src={Pic} height="400px"/>
          
        </div>

      </div>

      
    </div>
  )
}

export default About
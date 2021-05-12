import React, {useEffect} from 'react'
import './About.css';
import Pic from '../../images/headshot1.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';


const About = ({ imgStart }) => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <div
      style={{
        display: 'flex',
        height: '120vh'
      }}
    >
      <div className="about-container">
        <div className="row about_content-row"
          style={{
            display: 'flex',
            flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
          }}>
        
          {/* <div className="about-container-left"> */}
        <div className="col">
          <div className="about_content-text-wrapper">
            <h1 data-aos="fade-up" className="about-header">
              About
            </h1>
  
            <p data-aos="fade-up" className="about-text">
            Hello! I’m Mary Ann Navarrete, a full-stack software engineer based in the Washington, DC area. I enjoy building things that provide solutions and efficiency, while creating insightful, dynamic user experiences with a pop of style. 
            </p>
            <p data-aos="fade-up" className="about-text">
            My background comes from 15 years of sales and marketing leadership in the hospitality and travel industry. Some of my expertise are working with Government clients, e-commerce marketing, and adding creative touches to any work I do. 
            </p>
            <p data-aos="fade-up" className="about-text">
            Part problem-solver that loves data-driven analysis, part design maven with an eye for styling, I get to enjoy the best of both worlds tapping into both my passions as a full stack developer. 
            </p>
            <p data-aos="fade-up" className="about-text">
            In my free time, I enjoy reading, watching NBA/Sixers games, playing golf, traveling and playing with my dog Toby! 
            </p>
          </div>
        </div>

        {/* <div className="about-container-right"> */}
        <div className="col">
          <div className="about_profile-img-wrapper">
            <img data-aos="fade-up" className="about_profile-img" src={Pic} height="300px" alt="headshot"/>
            <br />
            <p data-aos="fade-up" className="skills">
              <center>
              <span className="label-skill">JavaScript</span>
              <span className="label-skill">React</span>
              <span className="label-skill">Ruby</span>
                <span className="label-skill">Ruby on Rails</span>
              <br /><br />
                
              <span className="label-skill">HTML</span>
              <span className="label-skill">CSS</span>
              <span className="label-skill">PostgreSQL</span>
              <br /><br />
              <span className="label-skill">Bootstrap</span>
              <span className="label-skill">Material UI</span>
              <span className="label-skill">Adobe XD</span>
              </center>

            </p>

          </div>
         
        </div>


      </div>

      </div>
    </div>
  )
}

export default About

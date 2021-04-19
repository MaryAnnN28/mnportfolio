import NavCRM from '../../images/navcrm.jpeg'; 
import PlanetWarrior from '../../images/PlanetWarrior1.png'; 
import PlanetWarrior2 from '../../images/planetwarrior.png'; 
import BiteBoard from '../../images/biteboard.jpeg'; 
import GolfLive from '../../images/golflive.jpeg'; 
import MemeShare from '../../images/memeshare.jpeg'; 
import './Projects.css';



const Projects = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '350vh'
      }}
    >
   
      
      <div className="project-container">
        
        <div className="project-row">
          <div className="project-card">
            <img className="project-image" src={NavCRM} alt="NavCRM Dashboard" />
          </div>
          <div className="project-details">
            <h3 className="project-title">NavCRM</h3>
            <div className="description-container">
              <p className="project-description">Data visualization CRM dashboard that helps users organize customers and tasks, while providing an insightful look at customer data.</p>
              <p className="project-tech">
                React Rails Chart.js OAuth2 Chakra-UI 
              </p>
            </div>
          </div>
        </div>

        <div className="project-row">
          <div className="project-card">
            <img className="project-image" src={PlanetWarrior} alt="Planet Warrior App" />
          </div>
        </div>

        <div className="project-row">
          <div className="project-card">
            <img className="project-image" src={BiteBoard} alt="Bite Board Recipe Site"/>
          </div>
        </div>

        <div className="project-row">
         <div className="project-card">
          <img className="project-image" src={GolfLive} alt="Golf Live"/>
         </div>
        </div>

        <div className="project-row">
          <div className="project-card">
            <img className="project-image" src={MemeShare} alt="Meme Share" />
         </div>
        </div>

        <div className="project-row">
          <div className="project-card">
            <img className="project-image" src={PlanetWarrior2} alt="Meme Share" />
         </div>
        </div>


      </div> 

     




    </div>
  )
}

export default Projects

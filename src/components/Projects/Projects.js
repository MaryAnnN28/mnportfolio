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
        height: '300vh'
      }}
    >
   
      
      <div className="project-row">
        
        <div className="column">
          <div className="project-card">
            <img clasName="project-image" src={NavCRM} alt="NavCRM Dashboard" width="450px" height="300px" />
          </div>
        </div>

        <div className="column">
          <div className="project-card">
            <img src={PlanetWarrior} alt="Planet Warrior App" width="450px" height="300px" />
          </div>
        </div>

        <div className="column">
          <div className="project-card">
            <img src={BiteBoard} alt="Bite Board Recipe Site" width="450px" height="300px" />
          </div>
        </div>

        <div className="column">
         <div className="project-card">
          <img src={GolfLive} alt="Golf Live" width="450px" height="300px"/>
         </div>
        </div>

        <div className="column">
          <div className="project-card">
          <img src={MemeShare} alt="Meme Share" width="450px" height="300px"/>
         </div>
        </div>

        <div className="column">
          <div className="project-card">
          <img src={PlanetWarrior2} alt="Meme Share" width="450px" height="300px"/>
         </div>
        </div>


      </div> 

     




    </div>
  )
}

export default Projects

import NavCRM from '../../images/navcrm.jpeg'; 
import PlanetWarrior from '../../images/planetwarrior.png'; 
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
        height: '300vh',
        padding: '20px', 
      }}
    >
      <div className="row">
        <div className="column">
          <img src={NavCRM} alt="NavCRM Dashboard" width="600px" />
        </div>
        <div className="column">
          <img src={PlanetWarrior} alt="Planet Warrior App" width="600px" />
        </div>
        <div className="column">
          <img src={BiteBoard} alt="Bite Board Recipe Site" width="600px" />
        </div>
        <div className="column">
          <img src={GolfLive} alt="Golf Live" width="600px" />
        </div>
        <div className="column">
          <img src={MemeShare} alt="Meme Share" width="600px" />
        </div>
 
      </div>
    </div>
  )
}

export default Projects

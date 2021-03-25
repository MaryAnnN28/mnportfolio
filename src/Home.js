import './Home.css';
import nightsky from './images/nightsky.jpeg';
import NavBar from './NavBar'
// import { Card } from 'bootstrap'; 

function Home() {
  return (
    <>
    <div className="Home">
        
        <NavBar />
      
      <div className="bg">
        <img className="bg" src={nightsky} alt="bg" />  
      </div>
      
      <link href='https://fonts.googleapis.com/css?family=Josefin+Sans' rel='stylesheet' type='text/css' />
          <h1>
            <em>COMING SOON</em>
          </h1>
      <p>Mary Ann Navarrete</p>
      
      </div>

      </>
  );
}

export default Home;

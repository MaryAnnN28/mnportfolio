import './Home.css';
import nightsky from './images/nightsky.jpeg';
// import { Card } from 'bootstrap'; 

function Home() {
  return (
    <>
    <div className="Home">
      
        <div className="bg">
      <img className="bg" src={nightsky} alt="bg" />
          
    </div>
      
      <link href='https://fonts.googleapis.com/css?family=Josefin+Sans' rel='stylesheet' type='text/css' />
          <h1>
            <em>C</em>
            <em>O</em>
            <em>M</em>
            <em>I</em>
            <em>N</em>
            <em>G</em> 
            <em></em>
            <em>S</em>
            <em>O</em>
            <em>O</em>
            <em>N</em>
          </h1>
      <p>Mary Ann Navarrete</p>
      
      </div>

      </>
  );
}

export default Home;

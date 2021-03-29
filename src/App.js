import './App.css';
import NavBar from './components/NavBar/NavBar'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';





function App() {
  return (
    <>
    <div className="Home">
    
      <NavBar />
        
        <Header />
        <About />
        <Projects />
        <Contact />
  
  
      
      </div>

      </>
  );
}

export default App;

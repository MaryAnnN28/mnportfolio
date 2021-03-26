import './App.css';
import NavBar from './components/NavBar/NavBar'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';



function App() {
  return (
    <>
    <div className="Home">
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/contact" exact component={Contact} />
          </Switch>

        </Router>
  
  
      
      </div>

      </>
  );
}

export default App;

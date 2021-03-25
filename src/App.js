import './App.css';
import NavBar from './components/NavBar'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages'; 


function App() {
  return (
    <>
    <div className="Home">
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>

        </Router>
  
  
      
      </div>

      </>
  );
}

export default App;

import { BrowserRouter, Route } from 'react-router-dom'; 

import Projects from './Pages/Projects/Projects'
import About from './Pages/About/About'

import NavBar from './Components/NavBar/NavBar'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <NavBar />
  
        {/* Set up the Router */}
        <Route exact path="/projects" component={Projects} />
        <Route path="/about" component={About} />
  
      </div>
    </BrowserRouter>
  );
}

export default App;

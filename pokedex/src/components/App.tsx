import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
} from 'react-router-dom';
import Random from './Random'
import Home from './Home'
import SpecificPokemon from './SpecificPokemon'

function App() {
  return (
    <Router>
      <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to="/random" onClick={() => {window.location.href='/random'}}>Random</Link>
            </li>
          </ul>
      </nav>
      <Switch>
        <Route exact path="/"  component={Home}/>
        <Route exact path='/random'  component={Random}/>
        <Route exact path='/pokemon/:id' component={SpecificPokemon}></Route>
      </Switch>
    </Router>
  );
}

export default App;

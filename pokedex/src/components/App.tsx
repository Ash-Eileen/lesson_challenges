import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Random from "./Random";
import Home from "./Home";
import SpecificPokemon from "./SpecificPokemon";

function App() {
  const [searchResult, setSearchResult] = useState<string | undefined>();
  const [allPokemon, setAllPokemon] = useState();
  const [searchBarText, setSearchBarText] = useState<string | undefined>();

  useEffect(() => {
    if (!allPokemon) {
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=808`)
        .then((res) => res.json())
        .then((res) =>
          setAllPokemon(res.results.map((pokemon: Pokemon) => pokemon.name))
        );
    }
  }, []);

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link
              to="/random"
              onClick={() => {
                window.location.href = "/random";
              }}
            >
              Random
            </Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <>
          <h1>This is a Search Bar</h1>
          <input
            type="text"
            placeholder="Search for a pokemon"
            onChange={(e) => {
              let text: string = e.target.value;
              setSearchBarText(text);
            }}
          />
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              setSearchResult(searchBarText);
              setSearchBarText("");
            }}
          >
            Search
          </button>
        </>
        {console.log(searchBarText)}

        <Route exact path="/" component={Home} />

        <Route exact path="/random" component={Random} />
        <Route
          exact
          path={`/pokemon/${searchResult}`}
          component={SpecificPokemon}
        ></Route>
      </Switch>
    </Router>
  );
}

export default App;

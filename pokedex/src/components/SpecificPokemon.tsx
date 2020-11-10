import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

type TParams = { id: string };

const SpecificPokemon = ({ match }: RouteComponentProps<TParams>) => {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>();

  useEffect(() => {
    if (!pokemon) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`)
        .then((res) => res.json())
        .then((res) => setPokemon(res));
    }
  });

  return (
    <>
      {pokemon ? (
        <>
          <p style={{ textTransform: "capitalize" }}>{pokemon.name}</p>
          <img src={`${pokemon.sprites.front_default}`} alt="pokemon"></img>
        </>
      ) : (
        <>
          <h1>Meow</h1>
        </>
      )}
    </>
  );
};

export default SpecificPokemon;

import React, {useState, useEffect } from 'react'
import { RouteComponentProps } from "react-router-dom";

interface pokemon {
  name: string;
}

interface sprite {
  front_default: string;
}

type TParams =  { id: string };

const SpecificPokemon = ({ match }: RouteComponentProps<TParams>) => {
  const [pokemon, setPokemon] = useState<pokemon | undefined>() 
  const [sprite, setSprite] = useState<sprite | undefined>()

  useEffect(() => {
    if (!pokemon) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`)
        .then(res => res.json())
        .then(res => {
          setSprite(res.sprites.front_default)
          setPokemon(res)
        })
    }
  })  
  
  return (
    <>
      {pokemon && 
      <>
        <p style={{textTransform: 'capitalize'}}>{pokemon.name}</p>
        <img src={`${sprite}`} alt='pokemon'></img>
      </>}
    </>
  )
}

export default SpecificPokemon

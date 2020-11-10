import React, {useEffect, useState} from 'react'

const getRandomNumberForPokeAPI = () => {
    let suitableNumber = Math.floor(Math.random() * 808);
    return suitableNumber;
}

const Random = () => {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>()
  
  useEffect(() => {
    if (!pokemon) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomNumberForPokeAPI()}`)
        .then(res => res.json())
        .then(res => {
          setPokemon(res)
        })    
      }
  })
  
  return (
    <div>
      <h1>Random</h1>
      {pokemon && 
      <>
        <p style={{textTransform: 'capitalize'}}>{pokemon.name}</p>
        <img src={`${pokemon.sprites.front_default}`} alt='pokemon'></img>
      </>}
    </div>
  )
}

export default Random

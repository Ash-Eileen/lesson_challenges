import React, {useEffect, useState} from 'react'

interface randomPokemon {
  name: string;
}

interface sprite {
  front_default: string;
}

const getRandomNumberForPokeAPI = () => {
    let suitableNumber = Math.floor(Math.random() * 808);
    return suitableNumber;
}

const Random = () => {
  const [randomPokemon, setRandomPokemon] = useState<randomPokemon | undefined>()
  const [sprite, setSprite] = useState<sprite | undefined>()
  
  useEffect(() => {
    if (!randomPokemon) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomNumberForPokeAPI()}`)
        .then(res => res.json())
        .then(res => {
          setSprite(res.sprites.front_default)
          setRandomPokemon(res)
        })    }
  })

  console.log(randomPokemon);
  
  return (
    <div>
      <h1>Random</h1>
      {randomPokemon && 
      <>
        <p style={{textTransform: 'capitalize'}}>{randomPokemon.name}</p>
        <img src={`${sprite}`} alt='pokemon'></img>
      </>}
    </div>
  )
}

export default Random

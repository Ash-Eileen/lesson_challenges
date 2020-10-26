// As requested using node-fetch

const express = require('express')
const fetch = require('node-fetch');

const app = express()
const port = 3000

function randomValidNumbers(num) {
  let arr = []
  for (let i = 0; i < num; i++) {
    arr.push(Math.floor(Math.random() * 808) + 1)
  }
  return arr
}

// Returns pokemon object using the pokemon numbers
function pokemonGenerator(num) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
    .then(res => res.json())
    .then(eachPokemon => {
      let pokemon = {
        "types": []
      }
      pokemon.name = eachPokemon["name"]
      for (let i = 0; i < eachPokemon["types"].length; i++) {
        pokemon["types"][i] = eachPokemon["types"][i]["name"]
      }
      pokemon.image = eachPokemon.sprites.front_default
      return pokemon
    })
}

function getPokemon(pokemon) {

  obj = {
    data: []
  }
  pokemon.map(pokemon => {
    obj.data.push(pokemon)
  })

}

function xyz(num) {
  const idArr = randomValidNumbers(num)

  let pokePromises = idArr.map(pokemonGenerator)
  Promise.all(pokePromises).then(console.log)

}

// app.get('/', (req, res) => {
// 	res.send('Hello World!')
// })


app.get('/teamBuilder/:numberOfTimes', (req, res) => {
  pokemon = xyz(req.params.numberOfTimes)
  res.send(pokemon);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


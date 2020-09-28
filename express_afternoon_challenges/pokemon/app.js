const express = require('express')
const fetch = require('node-fetch');

const app = express()
const port = 3000

function getRandomNumberForPokeAPI() {
  let suitableNumber = Math.floor(Math.random() * 808);
  return suitableNumber;
}

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.get('/teamBuilder', (req, res) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomNumberForPokeAPI()}`)
    .then(res => res.json())
    .then(json => {
      if (json.types[1]) {
      res.send(`Name: ${json.name}, Type 1: ${json.types[0].type.name}, Type 2: ${json.types[1].type.name}, Pic: ${json.sprites.front_default}`)
    } else {
      res.send(`Name: ${json.name}, Type: ${json.types[0].type.name}, Pic: ${json.sprites.front_default}`)
    }
    }
  )
  }
)

app.get('/teamBuilder/:numberOfTimes', (req, res) => {
  let numberOfTimes = req.params.numberOfTimes
  while(numberOfTimes > 0) { 
    fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomNumberForPokeAPI()}`)
      .then(res => res.json())
      .then(json => {
        if (json.types[1]) {
          res.write(`<p>Name: ${json.name}, Type 1: ${json.types[0].type.name}, Type 2: ${json.types[1].type.name}, Pic: ${json.sprites.front_default}<p>`)
        } else {
          res.write(`<p>Name: ${json.name}, Type: ${json.types[0].type.name}, Pic: ${json.sprites.front_default}</p>`)
        }
      })
    numberOfTimes--
  }
  res.end
  }
)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
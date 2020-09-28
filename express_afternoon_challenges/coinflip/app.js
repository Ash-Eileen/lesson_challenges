const express = require('express')

const app = express()
const port = 3000

function coinflip() {
  let result = Math.floor(Math.random() * 2)
  return (result === 1 ? 'Heads' : 'Tails')
}

function multipleFlips(numberOfFlips) {
  let flips = []
  for (let i = 0; i < numberOfFlips; i++) {
    flips.push(coinflip())
  }
  // [heads, tails, heads etc]
  let numberOfTimes = flips.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1
    return acc
  }, {})
  return numberOfTimes
}

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.get('/coinflip', (req, res) => {
	res.send(coinflip())
})

app.get('/coinflip/:numberOfFlips', (req, res) => {
  let numberOfFlips = req.params.numberOfFlips
  let flipsArray = multipleFlips(numberOfFlips)
  res.send(flipsArray)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
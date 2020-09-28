const express = require('express')

const app = express()
const port = 3000

app.get('/greeter', (req, res) => {
	res.send('Hello World!')
})

app.get('/greeter/:name', (req, res) => {
  res.send(`Hello ${req.params.name}!`)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
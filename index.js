const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World from Node Demo App! :)')
});

app.listen(port, () => {
  console.log(`Node app running on ${port}`) 
});
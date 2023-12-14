const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('BYE World! this is not listening to anything....boring....')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
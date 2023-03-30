const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  console.log(req)
  let data = req.body;
  console.log('data', data);
  res.send(data);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

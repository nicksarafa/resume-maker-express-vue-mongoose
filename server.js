const express = require('express')
const app = express()

app.listen(3000, function () {
  console.log('Server Started at Port 3000\n"May the Node be with you"')
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
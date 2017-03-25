const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// add middleware (like body-parser) via `use` method
// urlencoded method extracts data from <form /> and adds to the body of the request object
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, function () {
  console.log('Server Started at Port 3000\n"May the Node be with you"')
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
  console.log(req.body)
})
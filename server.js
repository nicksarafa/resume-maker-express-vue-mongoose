const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// Connect to mLab mongodb client
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('link-to-mongodb', (err, database) => {
  // start the server
})

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
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// add middleware (like body-parser) via `use` method
// urlencoded method extracts data from <form /> and adds to the body of the request object
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('quote saved to database')
    res.redirect('/')
  })
})

// Connect to mLab mongodb client
const MongoClient = require('mongodb').MongoClient

/**
 * MongoDbUri
 * @TODO implement envs or dot-env with environment variables
 */

const MongoDbUri = 'mongodb://neo:2jRZ2KJA7JPmxNwnpP2PX7ELcf4QgqLnDbaMYZyXD94kEfi2xvarkoPNZbBWBz4J@ds011281.mlab.com:11281/biography-bot'

var db

MongoClient.connect(MongoDbUri, (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('Server Started at Port 3000\n"May the Node be with you"')
  })
})

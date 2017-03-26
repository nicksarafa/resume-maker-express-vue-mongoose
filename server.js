let express = require('express')
let bodyParser = require('body-parser')
let app = express()
let cookieParser = require('cookie-parser')
let morgan = require('morgan')
let Applicant = require('./routes/Applicant')
let port = 3000

// @TODO implement envs or dot-env with environment variables
let MongoDbUri = 'mongodb://neo:2jRZ2KJA7JPmxNwnpP2PX7ELcf4QgqLnDbaMYZyXD94kEfi2xvarkoPNZbBWBz4J@ds011281.mlab.com:11281/biography-bot'

// options
let options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  greplset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } }
}

// connect to db
mongoose.connect(MongoDbUri, options)
let db = mongoose.connection
db.on('error', console.log.bind(console, 'connection error:'))

// don't let morgan log when in dev/test environment
if(process.env['NODE_ENV'] !== 'test') {
  // use morgan to log to command line
  // outputs Apache style logs
  app.use(morgan('combined'))
}

// add middleware (like body-parser) via `use` method
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/json' }))
app.use(cookieParser())

app.route('/Applicant')
  .get(Applicant.getApplicants)
  .post(Applicant.postApplicant)

app.route('/Applicant/:id')
  .get(Applicant.getApplicant)
  .delete(Applicant.deleteApplicant)
  .put(Applicant.updateApplicant)

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

/**
 * Prevents `Uncaught Error: listen EADDRINUSE :::3000` when running tests
 * @see http://www.marcusoft.net/2015/10/eaddrinuse-when-watching-tests-with-mocha-and-supertest.html
 */
if(!module.parent) {
  app.listen(port)
}

console.log('Listening on port ' + port + '\nMay the node be with you.')

module.exports = app

/**
 * Old post answers method
 * @todo update to work with routes
 * 
 * app.post('/answers', (req, res) => {
 *    db.collection('answers').save(req.body, (err, result) => {
 *      if (err) return console.log(err)
 *        console.log('answer saved to database')
 *    })
 * })
**/
let express = require('express')
let mongoose = require('mongoose')
let bodyParser = require('body-parser')
let cookieParser = require('cookie-parser')
let morgan = require('morgan')
let config = require('config')
let app = express()
let port = 3000

// routes
let Applicant = require('./routes/Applicant')
let Education = require('./routes/Education')
let Skill = require('./routes/Skill')
let Experience = require('./routes/Experience')
let Language = require('./routes/Language')

// db options on connect
let options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  greplset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } }
}

// connect to db
mongoose.connect(config.DBHost, options)
let db = mongoose.connection
db.on('error', console.log.bind(console, 'connection error:'))

// don't let morgan log when in dev/test environment
if(config.util.getEnv('NODE_ENV') !== 'test') {
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

app.route('/Education')
  .get(Education.getEducations)
  .post(Education.postEducation)
app.route('/Education/:id')
  .get(Education.getEducation)
  .delete(Education.deleteEducation)
  .put(Education.updateEducation)

app.route('/Skill')
  .get(Skill.getSkills)
  .post(Skill.postSkill)
app.route('/Skill/:id')
  .get(Skill.getSkill)
  .delete(Skill.deleteSkill)
  .put(Skill.updateSkill)

app.route('/Experience')
  .get(Experience.getExperiences)
  .post(Experience.postExperience)
app.route('/Experience/:id')
  .get(Experience.getExperience)
  .delete(Experience.deleteExperience)
  .put(Experience.updateExperience)

app.route('/Language')
  .get(Language.getLanguages)
  .post(Language.postLanguage)
app.route('/Language/:id')
  .get(Language.getLanguage)
  .delete(Language.deleteLanguage)
  .put(Language.updateLanguage)

/**
 * Serve index.html to client
 */
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
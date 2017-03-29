let express = require('express')
let mongoose = require('mongoose')
let bodyParser = require('body-parser')
let config = require('config')
let app = express()
let port = 3000

/**
 * SERVER
 */

// serve index.html to client
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'Header/json' }))

/**
 * wrapper supresses testign suite error
 * @see http://www.marcusoft.net/2015/10/eaddrinuse-when-watching-tests-with-mocha-and-supertest.html
 */
if(!module.parent) { 
  app.listen(port)
}

console.log('Listening on port ' + port + '\nMay the node be with you.')

/************************************************************************/

/**
 * DATABASE
 */

let options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  greplset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } }
}

mongoose.connect(config.DBHost, options)

mongoose.connection.on('error', console.log.bind(console, 'mongoose connection error:'))

/************************************************************************/

/**
 * ROUTES
 */

let Header = require('./routes/Header')
let Education = require('./routes/Education')
let Skill = require('./routes/Skill')
let Experience = require('./routes/Experience')
let Language = require('./routes/Language')

app.route('/Header')
  .get(Header.getHeaders)
  .post(Header.postHeader)
app.route('/Header/:id')
  .get(Header.getHeader)
  .delete(Header.deleteHeader)
  .put(Header.updateHeader)

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

/************************************************************************/

module.exports = app
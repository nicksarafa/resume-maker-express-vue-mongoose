const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const config = require('config')
const next = require('next')
const port = 3000

/**
 * ROUTES
 */

const Header = require('./routes/Header')
const Education = require('./routes/Education')
const Skill = require('./routes/Skill')
const Experience = require('./routes/Experience')
const Language = require('./routes/Language')

/**
 * next.js simple setup
 * @see https://github.com/zeit/next.js/blob/master/examples/custom-server-express/server.js
 */

const dev = process.env.NODE_ENV !== 'production'
const nextjs = next({ dev })
const handle = nextjs.getRequestHandler()
const app = express()
modules.exports

nextjs.prepare()
.then(() => {

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.text())
    app.use(bodyParser.json({ type: 'Header/json' }))

    app.get('/index', (req, res) => app.render(req, res, '/index'))

    app.get('/', (req, res) => handle(req, res))

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

    /** * wrapper supresses testign suite error
     * @see http://www.marcusoft.net/2015/10/eaddrinuse-when-watching-tests-with-mocha-and-supertest.html
     */
    if(!module.parent) {
        app.listen(port, (err) => {
            if(err) throw err
            console.log('Listening on port ' + port + '\nMay the node be with you.')
        })
    }
})

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

module.exports = app
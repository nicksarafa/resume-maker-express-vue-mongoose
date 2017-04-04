process.env.NODE_ENV = 'test'

const mongoose = require('mongoose')
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server')
const should = chai.should()
const Experience = require('../models/Experience')

chai.use(chaiHttp)

describe('Experience', () => {

  beforeEach((done) => {
    Experience.remove({}, (err) => {
      done()
    })
  })

  describe('/GET Experiences', () => {
    it('it should get all Experiences', (done) => {
      chai.request(server)
        .get('/Experience/')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('array')
          res.body.length.should.be.eql(0)
          done()
        })
    })
  })

  describe('/POST Experience', () => {
    it('it should NOT POST an Experience without a organizationName or title', (done) => {
      const Experience = {
        // organizationName: 'Github',
        // title: 'DevOps Engineer',
        startMonth: 'April',
        startYear: '2007',
        endMonth: 'March',
        endYear: '2009',
        description: 'Lead devops developer',
      }
      chai.request(server)
        .post('/Experience/')
        .send(Experience)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.should.have.property('errors')
          res.body.errors.should.have.property('organizationName')
          res.body.errors.organizationName.should.have.property('kind').eql('required')
          res.body.errors.should.have.property('title')
          res.body.errors.title.should.have.property('kind').eql('required')
          done()
        })
    })

    it('it should POST an Experience', (done) => {
      const Experience = {
        organizationName: 'Github',
        title: 'DevOps Engineer',
        startMonth: 'April',
        startYear: '2007',
        endMonth: 'March',
        endYear: '2009',
        description: 'Lead devops developer3',
      }
      chai.request(server)
        .post('/Experience/')
        .send(Experience)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.should.have.property('message').eql('Experience successfully added!')
          res.body.Experience.should.have.property('title')
          done()
        })
    })
  })

  describe('/GET/:id Experience', () => {
    it('it should retrieve an Experience given its id', (done) => {
      const experience = new Experience({
        organizationName: 'Github',
        title: 'DevOps Engineer',
        startMonth: 'April',
        startYear: '2007',
        endMonth: 'March',
        endYear: '2009',
        description: 'Lead devops developer3',
      })
      experience.save((err, Experience) => {
        chai.request(server)
          .get('/Experience/' + Experience.id)
          .send(Experience)
          .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a('object')
            res.body.should.have.property('organizationName')
            res.body.should.have.property('title')
            res.body.should.have.property('_id').eql(Experience.id)
            done()
          })
      })
    })
  })

  describe('/PUT/:id Experience', () => {
    it('it should UPDATE an Experience given its id', (done) => {
      const experience = new Experience({
        organizationName: 'Github',
        title: 'DevOps Engineer',
        startMonth: 'April',
        startYear: '2007',
        endMonth: 'March',
        endYear: '2009',
        description: 'Lead devops developer3',
      })
      experience.save((err, Experience) => {
        chai.request(server)
          .put('/Experience/' + Experience.id)
          .send({
            title: 'Senior DevOps Engineer'
          })
          .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a('object')
            res.body.should.have.property('message').eql('Experience successfully updated!')
            res.body.Experience.should.have.property('title').eql('Senior DevOps Engineer')
            done()
          })
      })
    })
  })

  describe('/DELETE/:id Experience', () => {
    it('it should DELETE an Experience given its id', (done) => {
      const experience = new Experience({
        organizationName: 'Github',
        title: 'DevOps Engineer',
        startMonth: 'April',
        startYear: '2007',
        endMonth: 'March',
        endYear: '2009',
        description: 'Lead devops developer3',
      })
      experience.save((err, Experience) => {
        chai.request(server)
          .delete('/Experience/' + Experience.id)
          .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a('object')
            res.body.should.have.property('message').eql('Experience successfully deleted!')
            res.body.result.should.have.property('ok').eql(1)
            res.body.result.should.have.property('n').eql(1)
            done()
          })
      })
    })
  })
})
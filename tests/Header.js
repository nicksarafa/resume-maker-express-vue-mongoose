process.env.NODE_ENV = 'test'

const mongoose = require('mongoose')
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server')
const should = chai.should()
const Header = require('../models/Header')

chai.use(chaiHttp)

describe('Headers', () => {

  beforeEach((done) => {
    Header.remove({}, (err) => {
      done()
    })
  })

  describe('/GET Header', () => {
    it('it should GET all the Headers', (done) => {
      chai.request(server)
        .get('/Header/')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('array')
          res.body.length.should.be.eql(0)
          done()
        })
    })
  })

  describe('/POST Header', () => {
    it('it should not POST an Header without name field', (done) => {
      const Header = {
        about: 'Web dev on a mission',
      }
      chai.request(server)
        .post('/Header/')
        .send(Header)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.should.have.property('errors')
          res.body.errors.should.have.property('name')
          res.body.errors.name.should.have.property('kind').eql('required')
          done()
        })
    })

    it('it should POST an Header ', (done) => {
      const Header = {
        name: 'John Snow',
        about: 'Web dev on a mission',
      }
      chai.request(server)
        .post('/Header/')
        .send(Header)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.should.have.property('message').eql('Header successfully added!')
          res.body.Header.should.have.property('name')
          res.body.Header.should.have.property('about')
          done()
        })
    })
  })

  describe('/GET/:id Header', () => {
    it('it should GET an Header by the given id', (done) => {
      const header = new Header({
        name: 'John Snow',
        about: 'Web dev on a mission',
      })
      header.save((err, Header) => {
        chai.request(server)
          .get('/Header/' + Header.id)
          .send(Header)
          .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a('object')
            res.body.should.have.property('name')
            res.body.should.have.property('about')
            res.body.should.have.property('_id').eql(Header.id)
            done()
          })
      })
    })
  })

  describe('/PUT/:id Header', () => {
    it('it should UPDATE an Header given the id', (done) => {
      const header = new Header({
        name: 'John Snow',
        about: 'Web dev on a mission',
      })
      header.save((err, Header) => {
        chai.request(server)
          .put('/Header/' + Header.id)
          .send({
            name: 'C.S. Lewis'
          })
          .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a('object')
            res.body.should.have.property('message').eql('Header successfully updated!')
            res.body.Header.should.have.property('name').eql('C.S. Lewis')
            done()
          })
      })
    })
  })

  describe('/DELETE/:id Header', () => {
    it('it should DELETE an Header given its id', (done) => {
      const header = new Header({
        name: 'John Snow',
        about: 'Web dev on a mission',
      })
      header.save((err, Header) => {
        chai.request(server)
          .delete('/Header/' + Header.id)
          .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a('object')
            res.body.should.have.property('message').eql('Header successfully deleted!')
            res.body.result.should.have.property('ok').eql(1)
            res.body.result.should.have.property('n').eql(1)
            done()
          })
      })
    })
  })
})
process.env.NODE_ENV = 'test'

const mongoose = require('mongoose')
const chai = require('chai')
const chaiHtpp = require('chai-http')
const server = require('../server')
const should = chai.should()
const Contact = require('../models/Contact')

chai.use(chaiHtpp)

describe('Contact', () => {

  beforeEach((done) => {
    Contact.remove({}, (err) => {
      done()
    })
  })

  describe('/GET Contact', () => {
    it('it should GET all Contacts', (done) => {
      chai.request(server)
        .get('/Contact')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('array')
          res.body.length.should.be.eql(0)
          done()
        })
    })
  })

  describe('/POST Contact', () => {
    it('it should POST a new Contact', (done) => {
      const Contact = {
        email: 'new@contact.com',
        phone: '+123456789',
        website: 'newcontact.com',
        city: 'Contact',
        state: 'Nebraska',
      }
      chai.request(server)
        .post('/Contact/')
        .send(Contact)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          res.body.should.have.property('message').eql('Contact successfully added!')
          res.body.Contact.should.have.property('email')
          done()
        })
    })
  })

  describe('/GET/:id Contact', () => {
    it('it should GET Contact given its id', (done) => {
      const contact = new Contact({
        email: 'new@contact.com',
        phone: '+123456789',
        website: 'newcontact.com',
        city: 'Contact',
        state: 'Nebraska',
      })
      contact.save((err, Contact) => {
        chai.request(server)
          .get('/Contact/' + Contact.id)
          .send(Contact)
          .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a('object')
            res.body.should.have.property('email')
            res.body.should.have.property('_id').eql(Contact.id)
            done()
          })
      })
    })
  })

  describe('/DELETE/:id Contact', () => {
    it('it should DELETE Contact given its id', (done) => {
      const contact = new Contact({
        email: 'new@contact.com',
        phone: '+123456789',
        website: 'newcontact.com',
        city: 'Contact',
        state: 'Nebraska',
      })
      contact.save((err, Contact) => {
        chai.request(server)
          .delete('/Contact/' + Contact.id)
          .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a('object')
            res.body.should.have.property('message').eql('Contact successfully deleted!')
            res.body.result.should.have.property('ok').eql(1)
            res.body.result.should.have.property('n').eql(1)
            done()
          })
      })
    })
  })


  describe('/PUT/:id Contact', () => {
    it('it should UPDATE Contact given its id', (done) => {
      const contact = new Contact({
        email: 'new@contact.com',
        phone: '+123456789',
        website: 'newcontact.com',
        city: 'Contact',
        state: 'Nebraska',
      })
      contact.save((err, Contact) => {
        chai.request(server)
          .put('/Contact/' + Contact.id)
          .send({ email: 'newest@contact.com' })
          .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a('object')
            res.body.should.have.property('message').eql('Contact successfully updated!')
            res.body.Contact.should.have.property('email').eql('newest@contact.com')
            done()
          })
      })
    })
  })
})
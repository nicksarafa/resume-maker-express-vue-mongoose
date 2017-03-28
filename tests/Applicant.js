process.env.NODE_ENV = 'test'

let mongoose = require('mongoose')
let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../server')
let should = chai.should()
let Applicant = require('../models/Applicant')

chai.use(chaiHttp)

describe('Applicants', () => {

    beforeEach((done) => {
        Applicant.remove({}, (err) => {
           done()
        })
    })

    describe ('/GET Applicant', () => {
        it('it should GET all the Applicants', (done) => {
            chai.request(server)
            .get('/Applicant/')
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('array')
                res.body.length.should.be.eql(0)
                done()
            })
        })
    })

    describe ('/POST Applicant', () => {
        it('it should not POST an Applicant without name field', (done) => {
            let Applicant = {
                email: 'JohnSnow@gmail.com',
                phone: '123-456-7890',
            }
            chai.request(server)
            .post('/Applicant/')
            .send(Applicant)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('object')
                res.body.should.have.property('errors')
                res.body.errors.should.have.property('name')
                res.body.errors.name.should.have.property('kind').eql('required')
                done()
            })
        })

        it('it should POST an Applicant ', (done) => {
            let Applicant = {
                name: 'John Snow',
                email: 'JohnSnow@gmail.com',
                phone: '123-456-7890'
            }
            chai.request(server)
            .post('/Applicant/')
            .send(Applicant)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('object')
                res.body.should.have.property('message').eql('Applicant successfully added!')
                res.body.Applicant.should.have.property('name')
                res.body.Applicant.should.have.property('email')
                res.body.Applicant.should.have.property('phone')
                done()
            })
        })
    })

    describe ('/GET/:id applicant', () => {
        it('it should GET an Applicant by the given id', (done) => {
            let applicant = new Applicant({
                name: 'John Snow',
                email: 'JohnSnow@gmail.com',
                phone: '123-456-7890'
            })
            applicant.save((err, Applicant) => {
                chai.request(server)
                .get('/Applicant/' + Applicant.id)
                .send(Applicant)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('name')
                    res.body.should.have.property('email')
                    res.body.should.have.property('phone')
                    res.body.should.have.property('_id').eql(Applicant.id)
                    done()
                })
            })
        })
    })

    describe ('/PUT/:id Applicant', () => {
        it('it should UPDATE an Applicant given the id', (done) => {
            let applicant = new Applicant({
                name: 'John Snow',
                email: 'JohnSnow@gmail.com',
                phone: '123-456-7890'
            })
            applicant.save((err, Applicant) => {
                chai.request(server)
                .put('/Applicant/' + Applicant.id)
                .send({ name: 'C.S. Lewis' })
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('message').eql('Applicant successfully updated!')
                    res.body.Applicant.should.have.property('name').eql('C.S. Lewis')
                    done()
                })
            })
        })
    })

    describe ('/DELETE/:id Applicant', () => {
        it('it should DELETE an Applicant given its id', (done) => {
            let applicant = new Applicant({
                name: 'John Snow',
                email: 'JohnSnow@gmail.com',
                phone: '123-456-7890'
            })
            applicant.save((err, Applicant) => {
                chai.request(server)
                .delete('/Applicant/' + Applicant.id)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('message').eql('Applicant successfully deleted!')
                    res.body.result.should.have.property('ok').eql(1)
                    res.body.result.should.have.property('n').eql(1)
                    done()
                })
            })
        })
    })
})
process.env.NODE_ENV = 'test'

let mongoose = require('mongoose')
let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../server')
let should = chai.should()
let Application = require('../models/Application')

chai.use(chaiHttp)

describe('Applications', () => {

    beforeEach((done) => {
        Application.remove({}, (err) => {
           done()
        })
    })

    describe ('/GET Application', () => {
        it('it should GET all the Applications', (done) => {
            chai.request(server)
            .get('/Application/')
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('array')
                res.body.length.should.be.eql(0)
                done()
            })
        })
    })

    describe ('/POST Application', () => {
        it('it should not POST an Application without name field', (done) => {
            let Application = {
                email: 'JohnSnow@gmail.com',
                phone: '123-456-7890',
            }
            chai.request(server)
            .post('/Application/')
            .send(Application)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('object')
                res.body.should.have.property('errors')
                res.body.errors.should.have.property('name')
                res.body.errors.name.should.have.property('kind').eql('required')
                done()
            })
        })

        it('it should POST an Application ', (done) => {
            let Application = {
                name: 'John Snow',
                email: 'JohnSnow@gmail.com',
                phone: '123-456-7890'
            }
            chai.request(server)
            .post('/Application/')
            .send(Application)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('object')
                res.body.should.have.property('message').eql('Application successfully added!')
                res.body.Application.should.have.property('name')
                res.body.Application.should.have.property('email')
                res.body.Application.should.have.property('phone')
                done()
            })
        })
    })

    describe ('/GET/:id Application', () => {
        it('it should GET an Application by the given id', (done) => {
            let application = new Application({
                name: 'John Snow',
                email: 'JohnSnow@gmail.com',
                phone: '123-456-7890'
            })
            application.save((err, Application) => {
                chai.request(server)
                .get('/Application/' + Application.id)
                .send(Application)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('name')
                    res.body.should.have.property('email')
                    res.body.should.have.property('phone')
                    res.body.should.have.property('_id').eql(Application.id)
                    done()
                })
            })
        })
    })

    describe ('/PUT/:id Application', () => {
        it('it should UPDATE an Application given the id', (done) => {
            let application = new Application({
                name: 'John Snow',
                email: 'JohnSnow@gmail.com',
                phone: '123-456-7890'
            })
            application.save((err, Application) => {
                chai.request(server)
                .put('/Application/' + Application.id)
                .send({ name: 'C.S. Lewis' })
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('message').eql('Application successfully updated!')
                    res.body.Application.should.have.property('name').eql('C.S. Lewis')
                    done()
                })
            })
        })
    })

    describe ('/DELETE/:id Application', () => {
        it('it should DELETE an Application given its id', (done) => {
            let application = new Application({
                name: 'John Snow',
                email: 'JohnSnow@gmail.com',
                phone: '123-456-7890'
            })
            application.save((err, Application) => {
                chai.request(server)
                .delete('/Application/' + Application.id)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('message').eql('Application successfully deleted!')
                    res.body.result.should.have.property('ok').eql(1)
                    res.body.result.should.have.property('n').eql(1)
                    done()
                })
            })
        })
    })
})
process.env.NODE_ENV = 'test'

let mongoose = require('mongoose')
let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../server')
let should = chai.should()
let Header = require('../models/Header')

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
            let Header = {
                email: 'JohnSnow@gmail.com',
                phone: '123-456-7890',
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
            let Header = {
                name: 'John Snow',
                email: 'JohnSnow@gmail.com',
                phone: '123-456-7890'
            }
            chai.request(server)
            .post('/Header/')
            .send(Header)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('object')
                res.body.should.have.property('message').eql('Header successfully added!')
                res.body.Header.should.have.property('name')
                res.body.Header.should.have.property('email')
                res.body.Header.should.have.property('phone')
                done()
            })
        })
    })

    describe('/GET/:id Header', () => {
        it('it should GET an Header by the given id', (done) => {
            let header = new Header({
                name: 'John Snow',
                email: 'JohnSnow@gmail.com',
                phone: '123-456-7890'
            })
            header.save((err, Header) => {
                chai.request(server)
                .get('/Header/' + Header.id)
                .send(Header)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('name')
                    res.body.should.have.property('email')
                    res.body.should.have.property('phone')
                    res.body.should.have.property('_id').eql(Header.id)
                    done()
                })
            })
        })
    })

    describe('/PUT/:id Header', () => {
        it('it should UPDATE an Header given the id', (done) => {
            let header = new Header({
                name: 'John Snow',
                email: 'JohnSnow@gmail.com',
                phone: '123-456-7890'
            })
            header.save((err, Header) => {
                chai.request(server)
                .put('/Header/' + Header.id)
                .send({ name: 'C.S. Lewis' })
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
            let header = new Header({
                name: 'John Snow',
                email: 'JohnSnow@gmail.com',
                phone: '123-456-7890'
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
process.env.NODE_ENV = 'test'

const mongoose = require('mongoose')
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server')
const should = chai.should()
const Skill = require('../models/Skill')

chai.use(chaiHttp)

describe('Skills', () => {

    beforeEach((done) => {
        Skill.remove({}, (err) => {
            done()
        })
    })

    describe('/GET Skill', () => {
        it('it should GET all Skills', (done) => {
            chai.request(server)
            .get('/Skill/')
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('array')
                res.body.length.should.be.eql(0)
                done()
            })
        })
    })

    describe('/POST Skill', () => {
        it('it should NOT post a Skill without name field', (done) => {
            const Skill = { title: 'Hadoop' }
            chai.request(server)
            .post('/Skill/')
            .send(Skill)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('object')
                res.body.should.have.property('errors')
                res.body.errors.should.have.property('name')
                res.body.errors.name.should.have.property('kind').eql('required')
                done()
            })
        })

        it('it should post a Skill', (done) => {
            const Skill = { name: 'JavaScript', }
            chai.request(server)
            .post('/Skill/')
            .send(Skill)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('object')
                res.body.should.have.property('message').eql('Skill successfully added!')
                res.body.Skill.should.have.property('name')
                done()
            })
        })
    })

    describe('/GET/:id Skill', () => {
        it('it should GET a Skill given its id', (done) => {
            const skill = new Skill({ name: 'Ruby' })
            skill.save((err, Skill) => {
                chai.request(server)
                .get('/Skill/' + Skill.id)
                .send(Skill)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('name')
                    res.body.should.have.property('_id').eql(Skill.id)
                    done()
                })
            })
        })
    })

    describe('/PUT/:id Skill', () => {
        it('it should UPDATE a Skill given its id', (done) => {
            const skill = new Skill({ name: 'Python' })
            skill.save((err, Skill) => {
                chai.request(server)
                .put('/Skill/' + Skill.id)
                .send({ name: 'SQL' })
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('message').eql('Skill updated!')
                    res.body.Skill.should.have.property('name').eql('SQL')
                    done()
                })
            })
        })
    })

    describe('/DELETE/:id Skill', () => {
        it('it should DELETE all the skills', (done) => {
            const skill = new Skill({ name: 'ReactJS' })
            skill.save((err, Skill) => {
                chai.request(server)
                .delete('/skill/' + Skill.id)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('message').eql('Skill successfully deleted!')
                    res.body.result.should.have.property('ok').eql(1)
                    res.body.result.should.have.property('n').eql(1)
                    done()
                })
            })
        })
    })
})
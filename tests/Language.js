process.env.NODE_ENV = 'test'

const mongoose = require('mongoose')
const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()
const server = require('../server')
const Language = require('../models/Language')

chai.use(chaiHttp)

describe('Language', () => {

    beforeEach((done) => {
        Language.remove({}, (err) => {
            done()
        })
    })

    describe('/GET Language', () => {
        it('it should GET all Languges', (done) => {
           chai.request(server) 
           .get('/Language/')
           .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('array')
                res.body.length.should.be.eql(0)
                done()
           })
        })
    })

    describe('/POST Language', () => {
        it('it should NOT const you POST without name and proficiency', (done) => {
           const Language = {
            //    name: 'Spanish',
            //    proficiency: 'Proficent',
           }
           chai.request(server)
           .post('/Language/')
           .send(Language)
           .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('object')
                res.body.should.have.property('errors')
                res.body.errors.should.have.property('name')
                res.body.errors.name.should.have.property('kind').eql('required')
                res.body.errors.should.have.property('proficiency')
                res.body.errors.proficiency.should.have.property('kind').eql('required')
                done()
           })
        })

        it('it should POST a Language', (done) => {
            const Language = {
                name: 'Spanish',
                proficiency: 'Fluent',
            }
            chai.request(server)
            .post('/Language/')
            .send(Language)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('object')
                res.body.Language.should.have.property('name')
                res.body.Language.should.have.property('proficiency')
                res.body.should.have.property('message').eql('Language successfully added!')
                done()
            })
        })
    })

    describe('/GET/:id Language', () => {
        it('it should get a Language given its id', (done) => {
            const language = new Language({
                name: 'Vietnamese',
                proficiency: 'Conversant',
            })
            language.save((err, Language) => {
                chai.request(server)
                .get('/Language/' + Language.id)
                .send(Language)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('name')
                    res.body.should.have.property('proficiency')
                    res.body.should.have.property('_id').eql(Language.id)
                    done()
                })
            })
        })
    })

    describe('/DELETE/:id Language', () => {
        it('it should DELETE a Language given its id', (done) => {
            const language = new Language({
                name: 'JavaScript',
                proficiency: 'Conversant',
            })
            language.save((err, Language) => {
                chai.request(server)
                .delete('/Language/' + Language.id)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('message').eql('Language successfully deleted!')
                    res.body.result.should.have.property('ok').eql(1)
                    res.body.result.should.have.property('n').eql(1)
                    done()
                })
            })
        })
    })

    describe('/PUT/:id Language', () => {
        it('it should UPDATE a Language given its id', (done) => {
            const language = new Language({
                name: 'Vietnamese',
                proficiency: 'Conversant',
            })
            language.save((err, Language) => {
                chai.request(server)
                .put('/Language/' + Language.id)
                .send({ name: 'Chinese' })
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('message').eql('Language successfully updated!')
                    res.body.Language.should.have.property('name').eql('Chinese')
                    done()
                })
            })
        })
    })
})
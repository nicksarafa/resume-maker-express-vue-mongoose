process.env.NODE_ENV = 'test'

let mongoose = require('mongoose')
let chai = require('chai')
let chaiHtpp = require('chai-http')
let server = require('../server')
let should = chai.should()
let Education = require('../models/Education')

chai.use(chaiHtpp)

describe('Education', () => {

    beforeEach((done) => {
        Education.remove({}, (err) => {
            console.log('beforeEach Education run')
            done()
        })
    })

    describe('/GET Education', () => {
        it('it should GET all Educations', (done) => {
           chai.request(server) 
           .get('/Education')
           .end((err, res) => {
               res.should.have.status(200)
               res.body.should.be.a('array')
               res.body.length.should.be.eql(0)
               done()
           })
        })
    })

    describe('/POST Education', () => {
        it('it should NOT post Education without schoolName', (done) => {
            let Education = {
                // schoolName: 'Duke University',
                degree: 'Bachelor\'s',
                fieldOfStudy: 'Informatics',
                extracurriculars: 'Basketball, Football, Fraternity',
                description: 'Focused my studies on informatics',
                startYear: '2011',
                endYear: '2015',
            }
            chai.request(server)
            .post('/Education/')
            .send(Education)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('object')
                res.body.should.have.property('errors')
                res.body.errors.should.have.property('schoolName')
                res.body.errors.schoolName.should.have.property('kind').eql('required')
                done()
            })
        })
    })

    describe('/GET/:id Education', () => {
        it('it should GET Education given its id', (done) => {
            let education = new Education({
                schoolName: 'Duke University',
                degree: 'Bachelor\'s',
                fieldOfStudy: 'Informatics',
                extracurriculars: 'Basketball, Football, Fraternity',
                description: 'Focused my studies on informatics',
                startYear: '2011',
                endYear: '2015',
            })
            education.save((err, Education) => {
                chai.request(server)
                .get('/Education/' + Education.id)
                .send(Education)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('schoolName')
                    res.body.should.have.property('_id').eql(Education.id)
                    done()
                })
            })
        })
    })

    describe('/DELETE/:id Education', () => {
        it('it should DELETE Education given its id', (done) => {
            let education = new Education({
                schoolName: 'Duke University',
                degree: 'Bachelor\'s',
                fieldOfStudy: 'Informatics',
                extracurriculars: 'Basketball, Football, Fraternity',
                description: 'Focused my studies on informatics',
                startYear: '2011',
                endYear: '2015',
            })
            education.save((err, Education) => {
                chai.request(server)
                .delete('/Education/' + Education.id)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('message').eql('Education successfully deleted!')
                    res.body.result.should.have.property('ok').eql(1)
                    res.body.result.should.have.property('n').eql(1)
                    done()
                })
            })
        })
    })


    describe('/PUT/:id Education', () => {
        it('it should UPDATE Education given its id', (done) => {
            let education = new Education({
                schoolName: 'Duke University',
                degree: 'Bachelor\'s',
                fieldOfStudy: 'Informatics',
                extracurriculars: 'Basketball, Football, Fraternity',
                description: 'Focused my studies on informatics',
                startYear: '2011',
                endYear: '2015',
            })
            education.save((err, Education) => {
                chai.request(server)
                .put('/Education/' + Education.id)
                .send({ schoolName: 'University of North Carolina' })
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('message').eql('Education successfully updated!')
                    res.body.Education.should.have.property('schoolName').eql('University of North Carolina')
                    done()
                })
            })
        })
    })
})
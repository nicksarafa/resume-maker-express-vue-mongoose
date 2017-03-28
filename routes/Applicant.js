let mongoose = require('mongoose')
let Applicant = require('../models/Applicant')

function getApplicants(req, res) {
    let query = Applicant.find({})
    query.exec((err, Applicants) => {
        if(err) res.send(err)
        res.json(Applicants)
    })
}

function postApplicant(req, res) {
    var newApplicant = new Applicant(req.body)
    newApplicant.save((err,Applicant) => {
        if (err) res.send(err)
        else res.json({ message: 'Applicant successfully added!', Applicant })
    })
}

function getApplicant(req, res) {
    Applicant.findById(req.params.id, (err, Applicant) => {
        if(err) res.send(err)
        res.json(Applicant)
    })     
}

function deleteApplicant(req, res) {
    Applicant.remove({ _id : req.params.id }, (err, result) => {
        res.json({ message: 'Applicant successfully deleted!', result })
    })
}

function updateApplicant(req, res) {
    Applicant.findById({ _id: req.params.id }, (err, Applicant) => {
        if(err) res.send(err)
        Object.assign(Applicant, req.body).save((err, applicant) => {
            if(err) res.send(err)
            res.json({ message: 'Applicant successfully updated!', Applicant })
        }) 
    })
}

module.exports = { getApplicants, postApplicant, getApplicant, deleteApplicant, updateApplicant }
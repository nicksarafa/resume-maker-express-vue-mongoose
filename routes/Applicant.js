let mongoose = require('mongoose')
let Applicant = require('../models/Applicant')

// GET /Applicant route to retrieve all the applicants.
function getApplicants(req, res) {
    // Query the DB and if no errors, send all the Applicants
    let query = Applicant.find({})
    query.exec((err, Applicants) => {
        if(err) res.send(err)
        res.json(Applicants)
    })
}

// POST /Applicant to save a new applicant.
function postApplicant(req, res) {
    // Creates a new Applicant
    var newApplicant = new Applicant(req.body)
    // Save new applicant to the DB
    newApplicant.save((err,Applicant) => {
        if (err) res.send(err)
        else res.json({message: "Applicant successfully added!", Applicant })
    })
}

// GET /Applicant/:id route to retrieve a applicant given its id.
function getApplicant(req, res) {
    Applicant.findById(req.params.id, (err, Applicant) => {
        if(err) res.send(err)
        res.json(Applicant)
    })     
}

// DELETE /Applicant/:id to delete a applicant given its id.
function deleteApplicant(req, res) {
    Applicant.remove({_id : req.params.id}, (err, result) => {
        res.json({ message: "Applicant successfully deleted!", result })
    })
}

// PUT /Applicant/:id to updatea a applicant given its id
function updateApplicant(req, res) {
    Applicant.findById({_id: req.params.id}, (err, Applicant) => {
        if(err) res.send(err)
        Object.assign(Applicant, req.body).save((err, applicant) => {
            if(err) res.send(err)
            res.json({ message: 'Applicant updated!', Applicant })
        }) 
    })
}

module.exports = { getApplicants, postApplicant, getApplicant, deleteApplicant, updateApplicant }
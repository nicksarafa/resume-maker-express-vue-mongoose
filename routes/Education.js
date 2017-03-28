let mongoose = require('mongoose')
let Education = require('../models/Education')

/**
 * @todo nest Education within Header. I don't think it needs its own route
 */

// GET /Education route to retrieve all educations
function getEducations(req, res) {
    // query the DB and if no errors, send all the Headers
    let query = Education.find({})
    query.exec((err, Educations) => {
        if(err) res.send(err)
        res.json(Educations)
    })
}

// POST /Education to save new education
function postEducation(req, res) {
    // creates a new education
    var newEducation = new Education(req.body)
    // save new education to db
    newEducation.save((err, Education) => {
        if(err) res.send(err)
        else res.json({ message: 'Education successfully added!', Education })
    })
}

// GET /Education/:id to retrieve Education(s) given its id
function getEducation(req, res) {
    Education.findById(req.params.id, (err, Education) => {
        if(err) res.send(err)
        res.json(Education)
    })
}

// DELETE /Education/:id to delete an education given its id
function deleteEducation(req, res) {
    Education.remove({_id: req.params.id}, (err, result) => {
        res.json({ message: 'Education successfully deleted!', result })
    })
}

// UPDATE /Education/:id
function updateEducation(req, res) {
    Education.findById({ _id: req.params.id }, (err, Education) => {
        if(err) res.send(err)
        Object.assign(Education, req.body).save((err, Education) => {
            if(err) res.send(err)
            res.json({ message: 'Education successfully updated!', Education })
        })
    })
}

module.exports = { getEducations, postEducation, getEducation, deleteEducation, updateEducation }
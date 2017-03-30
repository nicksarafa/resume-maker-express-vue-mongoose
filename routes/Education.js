const mongoose = require('mongoose')
const Education = require('../models/Education')

function getEducations(req, res) {
    const query = Education.find({})
    query.exec((err, Educations) => {
        if(err) res.send(err)
        res.json(Educations)
    })
}

function postEducation(req, res) {
    const newEducation = new Education(req.body)
    newEducation.save((err, Education) => {
        if(err) res.send(err)
        else res.json({ message: 'Education successfully added!', Education })
    })
}

function getEducation(req, res) {
    Education.findById(req.params.id, (err, Education) => {
        if(err) res.send(err)
        res.json(Education)
    })
}

function deleteEducation(req, res) {
    Education.remove({_id: req.params.id}, (err, result) => {
        res.json({ message: 'Education successfully deleted!', result })
    })
}

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
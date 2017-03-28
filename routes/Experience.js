let mongoose = require('mongoose')
let Experience = require('../models/Experience')

function getExperiences(req, res) {
    let query = Experience.find({})
    query.exec((err, Experiences) => {
        if(err) res.send(err)
        res.json(Experiences)
    })
}

function postExperience(req, res) {
    let newExperience = new Experience(req.body)
    newExperience.save((err, Experience) => {
        if(err) res.send(err)
        else res.json({ message: 'Experience successfully added!', Experience })
    })
}

function getExperience(req, res) {
    Experience.findById(req.params.id, (err, Experience) => {
        if(err) res.send(err)
        res.json(Experience)
    })
}

function deleteExperience(req, res) {
    Experience.remove({ _id: req.params.id }, (err, result) => {
        res.json({ message: 'Experience successfully deleted!', result })
    })
}

function updateExperience(req, res) {
    Experience.findById({ _id: req.params.id }, (err, Experience) => {
        if(err) res.send(err)
        Object.assign(Experience, req.body).save((err, experience) => {
            if(err) res.send(err)
            res.json({ message: 'Experience successfully updated!', Experience })
        })
    })
}

module.exports = { getExperiences, postExperience, getExperience, deleteExperience, updateExperience }
let mongoose = require('mongoose')
let Skill = require('../models/Skill')

// GET /Skill route to retrieve all skills
function getSkills(req, res) {
    let query = Skill.find({})
    query.exec((err, Skills) => {
        if(err) res.send(err)
        res.json(Skills)
    })
}

// POST /Skill to save new skill
function postSkill(req, res) {
    // creates a new skill
    let newSkill = new Skill(req.body)
    // save new skill to db
    newSkill.save((err, Skill) => {
        if(err) res.send(err)
        else res.json({ message: 'Skill successfully added!', Skill })
    })
}

// GET /Skill/:id to retrieve Skill given its id
function getSkill(req, res) {
    Skill.findById(req.params.id, (err, Skill) => {
        if(err) res.send(err)
        res.json(Skill)
    })
}

// DELETE /Skill/:id to delete an skill given its id 
function deleteSkill(req, res) {
    Skill.remove({ _id: req.params.id }, (err, result) => {
        res.json({ message: 'Skill successfully deleted!', result })
    })
}

// UPDATE /Skill/:id
function updateSkill(req, res) {
    Skill.findById({ _id: req.params.id }, (err, Skill) => {
        if(err) res.send(err)
        Object.assign(Skill, req.body).save((err, skill) => {
            if(err) res.send(err)
            res.json({ message: 'Skill updated!', Skill })
        })
    })
}

module.exports = { getSkills, postSkill, getSkill, deleteSkill, updateSkill }
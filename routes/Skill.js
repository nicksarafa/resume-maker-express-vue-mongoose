const mongoose = require('mongoose')
const Skill = require('../models/Skill')

function getSkills(req, res) {
    const query = Skill.find({})
    query.exec((err, Skills) => {
        if(err) res.send(err)
        res.json(Skills)
    })
}

function postSkill(req, res) {
    const newSkill = new Skill(req.body)
    newSkill.save((err, Skill) => {
        if(err) res.send(err)
        else res.json({ message: 'Skill successfully added!', Skill })
    })
}

function getSkill(req, res) {
    Skill.findById(req.params.id, (err, Skill) => {
        if(err) res.send(err)
        res.json(Skill)
    })
}

function deleteSkill(req, res) {
    Skill.remove({ _id: req.params.id }, (err, result) => {
        res.json({ message: 'Skill successfully deleted!', result })
    })
}

function updateSkill(req, res) {
    Skill.findById({ _id: req.params.id }, (err, Skill) => {
        if(err) res.send(err)
        Object.assign(Skill, req.body).save((err, Skill) => {
            if(err) res.send(err)
            res.json({ message: 'Skill updated!', Skill })
        })
    })
}

module.exports = { getSkills, postSkill, getSkill, deleteSkill, updateSkill }
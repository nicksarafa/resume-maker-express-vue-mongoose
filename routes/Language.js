let mongoose = require('mongoose')
let Language = require('../models/Language')

function getLanguages(req, res) {
    let query = Language.find({})
    query.exec((err, Languages) => {
        if(err) res.send(err)
        res.json(Languages)
    })
}

function postLanguage(req, res) {
    let newLanguage = new Language(req.body)
    newLanguage.save((err, Language) => {
        if(err) res.send(err)
        else res.json({ message: 'Language successfully added!', Language })
    })
}

function getLanguage(req, res) {
    Language.findById({ _id: req.params.id }, (err, Language) => {
        if(err) res.send(err)
        res.json(Language)
    })
}

function deleteLanguage(req, res) {
    Language.remove({ _id: req.params.id }, (err, result) => {
        res.json({ message: 'Language successfully deleted!', result })
    })
}

function updateLanguage(req, res) {
    Language.findById({ _id: req.params.id }, (err, Language) => {
        if(err) res.send(err)
        Object.assign(Language, req.body).save((err, language) => {
            if(err) res.send(err)
            res.json({ message: 'Language successfully updated!', Language })
        })
    })
}

module.exports = { getLanguages, postLanguage, getLanguage, deleteLanguage, updateLanguage }
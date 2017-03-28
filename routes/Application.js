let mongoose = require('mongoose')
let Application = require('../models/Application')

function getApplications(req, res) {
    let query = Application.find({})
    query.exec((err, Applications) => {
        if(err) res.send(err)
        res.json(Applications)
    })
}

function postApplication(req, res) {
    var newApplication = new Application(req.body)
    newApplication.save((err,Application) => {
        if (err) res.send(err)
        else res.json({ message: 'Application successfully added!', Application })
    })
}

function getApplication(req, res) {
    Application.findById(req.params.id, (err, Application) => {
        if(err) res.send(err)
        res.json(Application)
    })     
}

function deleteApplication(req, res) {
    Application.remove({ _id : req.params.id }, (err, result) => {
        res.json({ message: 'Application successfully deleted!', result })
    })
}

function updateApplication(req, res) {
    Application.findById({ _id: req.params.id }, (err, Application) => {
        if(err) res.send(err)
        Object.assign(Application, req.body).save((err, Application) => {
            if(err) res.send(err)
            res.json({ message: 'Application successfully updated!', Application })
        }) 
    })
}

module.exports = { getApplications, postApplication, getApplication, deleteApplication, updateApplication }
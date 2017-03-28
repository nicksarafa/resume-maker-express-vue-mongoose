let mongoose = require('mongoose')
let Header = require('../models/Header')

function getHeaders(req, res) {
    let query = Header.find({})
    query.exec((err, Headers) => {
        if(err) res.send(err)
        res.json(Headers)
    })
}

function postHeader(req, res) {
    var newHeader = new Header(req.body)
    newHeader.save((err,Header) => {
        if (err) res.send(err)
        else res.json({ message: 'Header successfully added!', Header })
    })
}

function getHeader(req, res) {
    Header.findById(req.params.id, (err, Header) => {
        if(err) res.send(err)
        res.json(Header)
    })     
}

function deleteHeader(req, res) {
    Header.remove({ _id : req.params.id }, (err, result) => {
        res.json({ message: 'Header successfully deleted!', result })
    })
}

function updateHeader(req, res) {
    Header.findById({ _id: req.params.id }, (err, Header) => {
        if(err) res.send(err)
        Object.assign(Header, req.body).save((err, Header) => {
            if(err) res.send(err)
            res.json({ message: 'Header successfully updated!', Header })
        }) 
    })
}

module.exports = { getHeaders, postHeader, getHeader, deleteHeader, updateHeader }
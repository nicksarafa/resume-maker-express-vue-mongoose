const mongoose = require('mongoose')
const Contact = require('../models/Contact')

function getContacts(req, res) {
  const query = Contact.find({})
  query.exec((err, Contacts) => {
    if(err) res.send(err)
    res.json(Contacts)
  })
}

function postContact(req, res) {
  const newContact = new Contact(req.body)
  newContact.save((err, Contact) => {
    if(err) res.send(err)
    else res.json({ message: 'Contact successfully added!', Contact })
  })
}

function getContact(req, res) {
  Contact.findById(req.params.id, (err, Contact) => {
    if (err) res.send(err)
    res.json(Contact)
  })
}

function deleteContact(req, res) {
  Contact.remove({_id: req.params.id}, (err, result) => {
    res.json({ message: 'Contact successfully deleted!', result })
  })
}

function updateContact(req, res) {
  Contact.findById({_id: req.params.id}, (err, Contact) => {
    if(err) res.send(err)
    Object.assign(Contact, req.body).save((err, Contact) => {
      if(err) res.send(err)
      res.json({ message: 'Contact successfully updated!', Contact })
    })
  })
}

module.exports = { getContacts, postContact, getContact, deleteContact, updateContact }
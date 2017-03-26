var expect = require('chai').expect
var exist = require('chai').exist

var Applicant = require('../models/Applicant')

it('should be dank', function(done) {
    var m = new Applicant({ isDank: false })

    console.log(m)

    m.validate(function(err) {
        expect(err.errors.isDank).to.not.exist
        done()
    })
})

// describe('applicant', function() {
//     it('Should be invalid if empty'), function(done) {
//         var tmp = new Applicant()

//         tmp.validate(function(err) {
//             expect(err.errors.name).to.exist
//             done()
//         })
//     }
// })
let mongoose = require('mongoose')
let Schema = mongoose.Schema

/**
 * Static lists for enumerating months, and years for multiselectors
 * @todo figure out solution wherein we don't have to update first element
 *       of listOfYears array manually every year without losing speed gain
 *       that comes with leveraging a static list
 */
const listOfMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
const listOfYears = [ '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000', '1999', '1998', '1997', '1996', '1995', '1994', '1993', '1992', '1991', '1990', '1989', '1988', '1987', '1986', '1985', '1984', '1983', '1982', '1981', '1980', '1979', '1978', '1977', '1976', '1975', '1974', '1973', '1972', '1971', '1970', '1969', '1968', '1967', '1966', '1965', '1964', '1963', '1962', '1961', '1960', '1959', '1958' ]

/**
 * @todo introduce location to Schema
 * @todo introduce countOfMonths to Schema
 * @todo introduce isCurrentEmployer
 */
let ExperienceSchema = new Schema({
    organizationName: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    startMonth: {
        type: String,
        enum: listOfMonths,
    },
    startYear: {
        type: Sting,
        enum: listOfYears,
    },
    endMonth: {
        type: String,
        enum: listOfMonths,
    },
    endYear: {
        type: String,
        enum: listOfYears,
    },
    description: String,
})

module.exports = mongoose.model('Experience', ExperienceSchema)
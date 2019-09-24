const { log } = console

const mongoose = require('mongoose')
const { MONGO_URI } = require('../helpers/dbConfig')

module.exports = () => {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
    })

    mongoose.Promise = global.Promise
    const db = mongoose.connection

    db.on('error', err => {
        log('DATABASE CONNECTION ERROR: ', err)
    })

    db.once('open', () => {
        log('DATABASE HAS SUCCESSFULLY BEING OPENED')
    })

    return db
}

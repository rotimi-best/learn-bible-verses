const mongoose = require('mongoose')
const { MONGO_URI } = require('../helpers/dbConfig')
const {
    info: infoLogger,
    error: errorLogger,
} = require('../services/loggerService')

module.exports = async () => {
    try {
        mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (error) {
        errorLogger(
            `${__filename}\n${__line}\nDATABASE CONNECTION ERROR\n${error.stack.toString()}`
        )
    }

    mongoose.Promise = global.Promise
    const db = mongoose.connection

    db.on('error', error => {
        errorLogger(
            `${__filename}\n${__line}\nDATABASE CONNECTION ERROR\n${error.stack.toString()}`
        )
    })

    db.once('open', () => {
        infoLogger('DATABASE HAS SUCCESSFULLY BEING OPENED')
    })

    return db
}

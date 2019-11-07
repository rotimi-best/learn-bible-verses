const mongoose = require('mongoose')
const { MONGO_URI } = require('../helpers/dbConfig')
const { log } = require('../services/loggerService')

module.exports = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (error) {
        log('error', error.stack.toString())
        log('error', `${__filename} ${__line} DATABASE CONNECTION ERROR`)
    }

    mongoose.Promise = global.Promise
    const db = mongoose.connection

    db.on('error', error => {
        log('error', error.stack.toString())
        log('error', `${__filename} ${__line} DATABASE CONNECTION ERROR`)
    })

    db.once('open', () => {
        log('info', 'DATABASE HAS SUCCESSFULLY BEING OPENED')
    })

    return db
}

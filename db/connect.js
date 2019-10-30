const mongoose = require('mongoose')
const { MONGO_URI } = require('../helpers/dbConfig')
const LogService = require('../services/loggerService')
const { date, time } = require('../modules')

module.exports = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (error) {
        LogService.log('error', error.stack.toString())
        LogService.log('error', `${date()} ${time()} ${__filename} ${__line} DATABASE CONNECTION ERROR`)
    }

    mongoose.Promise = global.Promise
    const db = mongoose.connection

    db.on('error', error => {
        LogService.log('error', error.stack.toString())
        LogService.log('error', `${date()} ${time()} ${__filename} ${__line} DATABASE CONNECTION ERROR`)
    })

    db.once('open', () => {
        LogService.log('info', 'DATABASE HAS SUCCESSFULLY BEING OPENED')
    })

    return db
}

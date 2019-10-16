const mongoose = require('mongoose')
const { MONGO_URI } = require('../helpers/dbConfig')
const LogService = require('../services/loggerService')

module.exports = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (error) {
        LogService.error('DATABASE CONNECTION ERROR: ', error)
        process.exit(1)
    }

    mongoose.Promise = global.Promise
    const db = mongoose.connection

    db.on('error', error => {
        LogService.error('DATABASE CONNECTION ERROR: ', error)
    })

    db.once('open', () => {
        LogService.info('DATABASE HAS SUCCESSFULLY BEING OPENED')
    })

    return db
}

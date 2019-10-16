const winston = require('winston')
require('winston-daily-rotate-file')

const transportDailyRotate = new winston.transports.DailyRotateFile({
    dirname: 'logs',
    filename: 'bot-boilerplate-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    prepend: true,
    json: true,
    maxSize: '20m',
    maxFiles: '7d',
})

const logger = winston.createLogger({
    format: winston.format.json(),
    transports: [transportDailyRotate],
})

module.exports = logger

const winston = require('winston')

winston.configure({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: './logs/botlogs.log',
            level: 'info',
            maxsize: 5242880,
        }),
    ]
});

module.exports = winston

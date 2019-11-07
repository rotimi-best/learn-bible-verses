const winston = require('winston')

winston.configure({
    format: winston.format.combine(
        winston.format.timestamp({
            format: () => new Date(Date.now()).toUTCString(),
        }),
        winston.format.json(),
    ),
    transports: [
        new winston.transports.Console({
            json: false,
            colorize: true
        }),
        new winston.transports.File({
            json: false,
            filename: './logs/wishbot.log',
            level: 'info',
            maxsize: 5242880,
        }),
    ]
});

module.exports = winston

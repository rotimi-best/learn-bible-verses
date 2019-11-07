const winston = require('winston')
const [mainFolderName] = process.cwd().split('/').splice(-1)

winston.configure({
    format: winston.format.combine(
        winston.format.timestamp({
            format: () => new Date(Date.now()).toUTCString(),
        }),
        winston.format.colorize(),
        winston.format.printf(
            info => `=========${info.timestamp}=========\nLevel: ${info.level}\nMessage: ${info.message}\n\n`
        )
    ),
    transports: [
        new winston.transports.Console({
            json: false,
            colorize: true
        }),
        new winston.transports.File({
            json: false,
            filename: `./logs/${mainFolderName}.log`,
            level: 'info',
            maxsize: 5242880,
        }),
    ]
});

module.exports = winston

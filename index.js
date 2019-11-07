require('dotenv').config()
require('./helpers/additionalInit')

const connectToDb = require('./db/connect')
const CallbackQueryController = require('./Controllers/CallbackQueryController')
const MessageEventController = require('./Controllers/MessageEventController')
const StartController = require('./Controllers/StartController')
const {
    info: infoLogger,
    error: errorLogger,
} = require('./services/loggerService')

/**
 *
 * BOT CONNECTION
 *
 */
const bot = require('./modules/getBot')()

/**
 *
 * MONGODB ATLAS CONNECTION
 *
 */
connectToDb()

/**
 *
 * OnClick /start
 *
 */
bot.onText(/^\/start$/, StartController)

/**
 *
 * OnUserSendMessage message
 *
 */
bot.on('message', MessageEventController)

/**
 *
 * OnClick inline buttons
 *
 */
bot.on('callback_query', CallbackQueryController)
const { pid } = process

process
    .on('SIGINT', () => {
        infoLogger(`${__filename}\n${__line}\nProcess ${pid} stopped manually`)
        process.exit(0)
    })
    .on('SIGTERM', () => {
        infoLogger(`${__filename}\n${__line}\nProcess ${pid} stopped`)
        process.exit(0)
    })
    .on('unhandledRejection', reason => {
        errorLogger(
            `${__filename}\n${__line}\nUnhandled rejection\n${reason.stack.toString()}`
        )
    })
    .on('uncaughtException', err => {
        errorLogger(
            `${__filename} ${__line} Uncaught exception\n${err.stack.toString()}`
        )
    })

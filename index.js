require('dotenv').config()
require('./helpers/additionalInit');

const connectToDb = require('./db/connect')
const CallbackQueryController = require('./Controllers/CallbackQueryController')
const MessageEventController = require('./Controllers/MessageEventController')
const StartController = require('./Controllers/StartController')
const { log } = require('./services/loggerService')

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
        log('info', `${__filename} ${__line} Process ${pid} stopped manually`)
        process.exit(0)
    })
    .on('SIGTERM', () => {
        log('info', `${__filename} ${__line} Process ${pid} stopped`)
        process.exit(0)
    })
    .on('unhandledRejection', reason => {
        log('error', reason.stack.toString())
        log('error', `${__filename} ${__line} Unhandled rejection`)
    })
    .on('uncaughtException', err => {
        log('error', err.stack.toString())
        log('error', `${__filename} ${__line} Uncaught exception`)
    })

require('dotenv').config()
const { DEVOPS_CHAT_ID } = process.env
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

const sendDevOps = msg => {
    bot.sendMessage(DEVOPS_CHAT_ID, msg).catch(err =>
        errorLogger(`Error sending message to devops: ${err}`)
    )
}

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
        const errorMsg = `${__filename}\n${__line}\nUnhandled rejection\n${reason}`
        sendDevOps(errorMsg)
        errorLogger(errorMsg)
    })
    .on('uncaughtException', err => {
        const errorMsg = `${__filename} ${__line} Uncaught exception\n${err}`
        sendDevOps(errorMsg)
        errorLogger(errorMsg)
    })

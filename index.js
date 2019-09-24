require('dotenv').config()

const connectToDb = require('./db/connect')
const CallbackQueryController = require('./Controllers/CallbackQueryController')
const MessageEventController = require('./Controllers/MessageEventController')
const StartController = require('./Controllers/StartController')

/**
 *
 * BOT CONNECTION
 *
 */
const bot = BotService.getBot()

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

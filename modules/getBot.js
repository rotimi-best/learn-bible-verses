const { BOT_TOKEN } = process.env
const TelegramBot = require('node-telegram-bot-api')

let bot = null

module.exports = () => {
    if (!bot) {
        bot = new TelegramBot(BOT_TOKEN, { polling: true })
    }

    return bot
}

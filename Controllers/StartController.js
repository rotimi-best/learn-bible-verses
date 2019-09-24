const { ADMIN_CHAT_ID } = process.env

const getBot = require('../modules/bot')
const { insertNewUser } = require('../modules/user')

const bot = getBot()

module.exports = async messageObject => {
    const {
        chat: { id: chatId },
    } = messageObject
    if (chatId == ADMIN_CHAT_ID) {
        return bot.sendMessage(ADMIN_CHAT_ID, 'Главное меню')
    }

    await bot.sendMessage(chatId, 'Welcome')

    await insertNewUser(messageObject)
}

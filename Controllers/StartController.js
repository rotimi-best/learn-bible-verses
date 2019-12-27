const { ADMIN_CHAT_ID } = process.env

const getBot = require('../modules/getBot')
const { insertNewUser } = require('../modules/user')
const { KEYBOARD_USER_MENU } = require('../helpers/button.constants');

const bot = getBot()

module.exports = async messageObject => {
    const {
        from: { first_name = 'Friend' },
        chat: { id: chatId },
    } = messageObject

    await bot.sendMessage(
      chatId,
      `Hey ${first_name}, I will help you learn bible verses`,
      KEYBOARD_USER_MENU
    )

    await insertNewUser(messageObject)
}

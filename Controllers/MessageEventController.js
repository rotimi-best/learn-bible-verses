const { log } = console

const getBot = require('../modules/getBot')
const { toAdminChatAndBackToUser } = require('../modules')

const bot = getBot()

module.exports = async props => {
    const {
        from,
        message_id,
        chat: { id: chatId },
        text,
    } = props

    if (text && text.search(/отмена/i) != -1) {
        return bot.sendMessage(chatId, 'Отмена. Вы в главном меню.')
    }

    // do something depending on the user's step or the sent message
    switch (text) {
        // by default send to admin chat
        default:
            toAdminChatAndBackToUser(
                chatId != ADMIN_CHAT_ID,
                bot,
                from,
                message_id
            )
            break
    }
}

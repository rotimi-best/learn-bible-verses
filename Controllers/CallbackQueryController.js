const { log } = console

const getBot = require('../modules/getBot')

const bot = getBot()

module.exports = async callbackProps => {
    const {
        id: callback_query_id,
        data: result,
        message: {
            chat: { id: chatId },
        },
    } = callbackProps
    log('callbackProps', callbackProps)

    bot.answerCallbackQuery(callback_query_id, {
        text: 'Хорошо!',
    })

    switch (result) {
        default:
            // do something
            break
    }
}

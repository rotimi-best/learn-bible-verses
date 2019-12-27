const { ADMIN_CHAT_ID } = process.env
const getBot = require('../modules/getBot')
const { getUser } = require('../db/cruds/User')
// const {  } = require('../modules')

const bot = getBot()

module.exports = async (props, user) => {
    const {
        from,
        message_id,
        chat: { id: chatId },
        text,
    } = props

    const { firstName, lastName, step} = user

    // do something depending on the user's step or the sent message
    switch (step) {
        // by default send to admin chat
        default:
            //
            break
    }
}

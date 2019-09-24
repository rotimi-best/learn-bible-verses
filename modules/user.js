const { ADMIN_CHAT_ID } = process.env
const { log } = console

const { getUser, addUser } = require('../db/cruds/User')

const { STEPS } = require('../helpers/constants')

const insertNewUser = async messageObject => {
    const {
        chat: {
            id: chatId,
            first_name: firstName = '',
            last_name: lastName = '',
            username: userName = '',
        },
    } = messageObject
    let user

    if (chatId == ADMIN_CHAT_ID) {
        return user
    }

    user = await getUser({ chatId })
    log('USER', user)
    if (!user.length) {
        user = await addUser({
            firstName,
            lastName,
            userName,
            chatId,
            step: STEPS.START,
        })
    }

    return user
}

module.exports = {
    insertNewUser,
}

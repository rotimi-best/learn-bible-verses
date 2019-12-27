const { ADMIN_CHAT_ID } = process.env

/**
 *
 * Calculate the length of a based in value
 *
 * @param {Any} n Any type of value
 */
const len = n => n.length

/**
 *
 * Get the current date
 *
 * @param {Object} params This should be an Object with fields you need in order to manipulate the date.
 * Currently there are 2 fields used which is: `monthInText` and `dayInText`
 * `monthInText`: if true then the name of the month will be returned instead of its index
 * e.g 2018-Nov-02 not 2018-12-02
 */
const date = myDate => {
    const today = myDate ? myDate : new Date()
    const day = today.getDate()
    const year = today.getFullYear()
    const month = today.getMonth() + 1

    const returnVal = `${year}-${month < 10 ? '0' + month : month}-${
        day < 10 ? '0' + day : day
    }`

    return returnVal
}

/**
 * Get the current time
 * @param {Number} value A number either to add or subtract from the hours in a day
 * @param {String} arithmeticOption This would be either "+" or "-". It determines if we want to add or subtract from time
 * @param {Date} date An instance of new Date()
 */
const time = date => {
    const today = date ? date : new Date()
    let seconds = today.getSeconds()
    let minutes = today.getMinutes()
    let hour = today.getHours()

    if (seconds < 10) seconds = '0' + seconds
    if (minutes < 10) minutes = '0' + minutes
    if (hour < 10) hour = '0' + hour

    let returnVal = hour + ':' + minutes + ':' + seconds

    return returnVal
}

const isNumber = msg => /\d/.test(msg)

/**
 *
 * Make script sleep for x amount of seconds
 *
 * @param {Number} sec Seconds to pause
 */
const sleep = sec => new Promise(res => setTimeout(res, sec * 1000))

const useRightRussianWordForNumber = (number = 0, words) => {
    if (words.length !== 3) {
        return ''
    }

    let word = ''

    const lastDigitInNumber = parseInt(`${number}`.slice(-1))

    if (number > 4 && number < 21) {
        word = words[2]
    } else if (number % 10 === 1) {
        word = words[0]
    } else if ([2, 3, 4].includes(lastDigitInNumber)) {
        word = words[1]
    } else {
        word = words[2]
    }

    return word
}

const isMobilePhoneValid = phone => {
    let valid = false

    if (phone) {
        phone = phone.split(' ').join('')
        const phoneRegex = RegExp('^[+]*(38){0,1}[0-9]{10}$')

        valid = phoneRegex.test(phone)
    }

    return valid
}

const increaseDayByNumber = no =>
    new Date(new Date().getTime() + no * 24 * 60 * 60 * 1000)

const toAdminChatAndBackToUser = (shouldForward, bot, from, message_id) => {
    if (shouldForward) {
        bot.forwardMessage(ADMIN_CHAT_ID, from.id, message_id).then(res => {
            bot.onReplyToMessage(res.chat.id, res.message_id, async answer => {
                bot.sendMessage(from.id, answer.text)
            })
        })
    }
}

module.exports = {
    date,
    isMobilePhoneValid,
    increaseDayByNumber,
    isNumber,
    len,
    sleep,
    time,
    useRightRussianWordForNumber,
    toAdminChatAndBackToUser,
}

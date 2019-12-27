const { ADMIN_CHAT_ID } = process.env
const getBot = require('../modules/getBot')
const LearnNewController = require('./LearnNewController')
const TestKnowledgeController = require('./TestKnowledgeController')
const { toAdminChatAndBackToUser } = require('../modules')
const { BUTTONS_TEXT } = require('../helpers/button.constants');
const { STEPS } = require('../helpers/constants');

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

    const [user] = await getUser({ chatId });

    if (user.status === STEPS.LEARN_MORE) {
      LearnNewController(props, user)
      return;
    }

    if (user.status === STEPS.TEST_KNOWLEDGE) {
      TestKnowledgeController(props, user)
      return;
    }

    switch (text) {
      case BUTTONS_TEXT.learnNewBibleVerses:
        console.log('learnNewBibleVerses');
        LearnNewController(props, user);
        break;
      case BUTTONS_TEXT.testYourKnowledge:
        console.log('test knowledge');
        LearnNewController(props, user);
        break;
      default:
        console.log('toAdminChatAndBackToUser');
        toAdminChatAndBackToUser(
              chatId != ADMIN_CHAT_ID,
              bot,
              from,
              message_id
          )
          break
    }
}

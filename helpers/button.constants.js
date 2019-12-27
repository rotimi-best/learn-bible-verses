const learnNewBibleVerses = 'Learn New Bible Verses';
const testYourKnowledge = 'Test your Knowledge';

const USER_MENU_KEYBOARD = [
    [{ text: learnNewBibleVerses }],
    [{ text: testYourKnowledge }],
];

module.exports = {
    BUTTONS_TEXT: {
      learnNewBibleVerses,
      testYourKnowledge
    },
    KEYBOARD_USER_MENU: {
        parse_mode: 'markdown',
        reply_markup: {
            keyboard: USER_MENU_KEYBOARD,
            resize_keyboard: true,
        },
    },
}

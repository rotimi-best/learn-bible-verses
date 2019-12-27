const questions = [
  {
    id: 1,
    passage: 'John 3:16',
    content: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.',
  },
  {
    id: 2,
    passage: 'John 14:6 ',
    content: 'Jesus said to him, “I am the way, the truth, and the life. No one comes to the Father except through Me.',
  },
  {
    id: 3,
    passage: 'Jeremiah 29:11',
    content: 'For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future.',
  },
  {
    id: 4,
    passage: 'Ephesians 2:8',
    content: 'For by grace you have been saved through faith, and that not of yourselves; it is the gift of God',
  },
  {
    id: 5,
    passage: 'John 10:10',
    content: 'The thief comes only to steal and kill and destroy; I have come that they may have life, and have it to the full.',
  },
  {
    id: 6,
    passage: 'Proverbs 18:21',
    content: 'Death and life are in the power of the tongue: and they that love it shall eat the fruit thereof.',
  },
  {
    id: 7,
    passage: '2 Corinthians 5:17',
    content: 'Therefore, if anyone is in Christ, he is a new creation; old things have passed away; behold, all things have become new.',
  },
  {
    id: 8,
    passage: 'Isaiah 40:31',
    content: 'But those who wait on the Lord Shall renew their strength; They shall mount up with wings like eagles, They shall run and not be weary, they shall walk and not faint.',
  },
  {
    id: 9,
    passage: '1 John 4:8',
    content: 'Whoever does not love does not know God, because God is love.',
  },
  {
    id: 10,
    passage: 'Galatians 6:9',
    content: 'And let us not grow weary while doing good, for in due season we shall reap if we do not lose heart.',
  },
  {
    id: 11,
    passage: 'Deuteronomy 31:6',
    content: 'Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you; he will never leave you nor forsake you.',
  },
  {
    id: 12,
    passage: 'Philippians 4:8',
    content: 'Finally, brethren, whatever things are true, whatever things are noble, whatever things are just, whatever things are pure, whatever things are lovely, whatever things are of good report, if there is any virtue and if there is anything praiseworthy—meditate on these things.',
  },{
    id: 13,
    passage: 'Genesis 1:3',
    content: 'And God said, Let there be light: and there was light.',
  },
  {
    id: 14,
    passage: 'Isaiah 55:8',
    content: 'For My thoughts are not your thoughts, Nor are your ways My ways,” says the Lord.',
  },
  {
    id: 15,
    passage: 'Isaiah 9:6',
    content: 'For unto us a Child is born, Unto us a Son is given; And the government will be upon His shoulder. And His name will be called Wonderful, Counselor, Mighty God, Everlasting Father, Prince of Peace.',
  },
  {
    id: 16,
    passage: '',
    content: '',
  },
  {
    id: 17,
    passage: '',
    content: '',
  },
  {
    id: 18,
    passage: '',
    content: '',
  },
  {
    id: 19,
    passage: '',
    content: '',
  },
  {
    id: 20,
    passage: '',
    content: '',
  },
]

module.exports = {
    ENVIRONMENT: {
        PRODUCTION: 'production',
        DEVELOPMENT: 'development',
        STAGING: 'staging',
        LOCAL: 'local',
    },
    STEPS: {
        START: 'start',
        LEARN_MORE: 'learn_more',
        TEST_KNOWLEDGE: 'test_knowledge'
    },
    QUESTIONS: questions
}

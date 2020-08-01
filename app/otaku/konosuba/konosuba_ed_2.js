const contentData = [
  [
    {
      word: '何',
      pronunciation: 'なに',
      romaji: 'nani',
      meaning: 'what?'
    },
    {
      word: 'も',
      pronunciation: 'も',
      romaji: 'mo',
      meaning: 'Adding も to the end of a question word is like turns it into the "null"  answer for the question. I.e. if somebody were to ask the question "what?" or 何 the null answer would be "nothing", 何も',
      partOfSpeech: 'PARTICLE',
      source: 'https://www.punipunijapan.com/nothing-in-japanese/'
    },
    {
      word: '言わ',
      pronunciation: 'いわ',
      romaji: 'i wa',
      meaning: 'say',
      notes: 'This is likely an inflection of 言 pronounced(いう iu)',
      source: 'http://www.romajidesu.com/dictionary/meaning-of-%E8%A8%80%E3%82%8F.html'
    },
    {
      word: 'ずに',
      pronunciation: 'ずに',
      romaji: 'zu ni',
      meaning: 'ずに is used to negate 言わ to become "without speaking"',
      partOfSpeech: 'ADJECTIVE',
      source: 'https://jref.com/articles/negation-in-japanese.125/'
    },
    {
      word: '家',
      pronunciation: 'いえ',
      romaji: 'ie',
      meaning: 'house'
    },
    {
      word: 'を',
      meaning: 'Here, を marks 家 as the direct object of the sentence',
      romaji: 'o',
      source: 'https://www.punipunijapan.com/grammar-lesson-7-particle-%E3%82%92-o/'
    },
    {
      word: '出',
      pronunciation: 'で',
      romaji: 'de',
      meaning: 'leave'
    },
    {
      word: 'て',
      pronunciation: 'て',
      romaji: 'te',
      meaning: 'て is used here combine the first verb (出) with the next ones on the following line',
      partOfSpeech: 'PARTICLE',
      source: 'https://www.imabi.net/theparticlete.htm'
    }
  ]
]

const titleData = [
  {
    word: 'おうち',
    pronunciation: 'おうち',
    romaji: 'o u chi',
    meaning: 'your home'
  },
  {
    word: 'に',
    pronunciation: 'に',
    romaji: 'ni',
    meaning: 'to be at',
    notes: 'The particle に has a lot of uses, here I think it makes "to be at" home.',
    source: 'https://www.wasabi-jpn.com/japanese-grammar/japanese-particle-ni-clear-up-all-doubts-you-may-have/#2'
  },
  {
    word: '帰り',
    pronunciation: 'かえり',
    romaji: 'ka e ri',
    meaning: 'to return home',
    notes: 'It seems like this is an inflection of 帰る, kae ru, in the -ri form, which turns it from the verb "return" into this noun. I.e. it turns it into a gerund!'
  },
  {
    word: 'たい',
    pronunciation: 'たい',
    romaji: 'ta i',
    meaning: 'To express a wish/desire',
    notes: 'the -tai form of a verb expresses a wish or desire',
    source: 'https://www.brighthubeducation.com/learning-japanese/37489-tai-verb-structure-want-to-do-not-want-to/'
  }
]

const englishContent =
`Leaving the house without saying a word,
I've made it all the way out here.
But once the sun goes down,
I turn into a hopeless, sniveling mess.

The sky above the city is stained red,
A crow cries as it passes on by.
My long shadow, stretching out along this path,
Pulls at my sleeve, urging me to head home.

The smell of grilled fish...
The wonderful smell of dinner...

Even my stomach begins to cry out,
And I'm getting tired of being stubborn.
I really should go apologize right away—
Ahh, I wanna go home!

Before my hopeless eyes,
A single child passes on by.
She sniffles, sobbing loudly...
Not bothering to look her way, I keep on running.

A figure departing into the darkness
Reminds me of who I was back when.

Running... running... wiping my eyes...
Chasing a waning moon—
If I go apologize right away,
I'll still make it in time for dinner!

The smell of grilled fish...
The wonderful smell of dinner...

Even my stomach begins to cry out,
And I'm getting tired of being stubborn.
I really should go apologize right away—
Ahh, I wanna go home!`

export default {
  titleData: titleData,
  contentData: contentData,
  japaneseTitle: titleData.map(word => word.word),
  japaneseContent: contentData.map(line => line.map(word => word.word)),
  englishTitle: 'Wanna Go Home',
  englishContent: englishContent.replace(',\n', '\n').split('\n').filter(line => line),
}
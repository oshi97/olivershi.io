const titleData = [
  {
    word: 'ゼロセンチメートル',
    romaji: 'ze ro se n chi me- to ru',
    meaning: 'Zero Centimeters',
  }
]
const contentData = [
  [
    {
      word: '隙間',
      pronunciation: 'すきま',
      romaji: 'su ki ma',
      meaning: 'gap',
    },
    {
      word: 'は',
      romaji: 'wa',
      meaning: '-wa particle, used after the topic to be talked the speaker wants to talk about',
      source: 'https://www.japanesepod101.com/japanese-particles/',
      notes: 'Wa（は）follows the topic the speaker wants to talk about. Therefore, wa（は）is often called topic marking particle. It is often used in a sentence pattern like, "[ A ] wa [ B ] desu." which means "[ A ] is [ B ]."'
    },
    {
      word: 'ゼロ',
      romaji: 'ze ro',
      meaning: 'zero',
    },
    {
      word: 'センチメートル',
      romaji: 'se n chi meー to ru',
      meaning: 'centimeter',
      notes: 'the ー symbol is the long vowel symbol',
      source: 'https://en.wikipedia.org/wiki/Ch%C5%8Donpu'
    }
  ],
  [
    {
      word: '隠し',
      pronunciation: 'かくし',
      romaji: 'ka ku shi',
      meaning: 'being hidden'
    },
    {
      word: 'きれない',
      romaji: 'ki re na i',
      meaning: '-nai negation of 切れる (ki re ru) which by itself means to break/snap'
    },
    {
      word: '距離',
      pronunciation: 'きょり',
      romaji: 'kyo ri',
      meaning: 'distance',
      notes: 'this is the small yo, which comes after hiragana (き, ぎ, し, じ, ち, に, ひ, び, ぴ, み, and り) and changes the sound from ki yo to kyo.',
      source: 'https://hinative.com/en-US/questions/733819'
    }
  ]
]

const englishContent =
`The gap between us is 0cm
Our shoulders lined up with no space to hide anything

Did you know?
If you want a wish to come true, if you say it out loud
You can get closer to making that wish to come true
The smaller the eraser that
Makes wishes come true becomes
My memories with you increase
The profile of your face becomes more mature

The gap between us is 0cm
Please guess what my wish is correctly
The first time is always
Something you remember the most
That's why I want you

Did you know?
It's actually quite easy to figure me out
Look into my eyes, don't look away
Let's figure out what we each think
Before the bell starts to ring

The gap between us is 0cm
Our shoulders line up with no space to hide anything
The first time is always
Something you don't want to forget
That's why I want you

The back alley around dusk
The shadow of the two of us
Easily overlaps with each other
I want the truth, nothing on purpose, and not just by chance

I have so much love towards you
If you can take your time to realize it, that would be great
The tip of the hand I reach out
Is what I wish for the most
So, I'm going to wait for you
With my hand open`

export default {
  titleData: titleData,
  contentData: contentData,
  japaneseTitle: titleData.map(word => word.word),
  japaneseContent: contentData.map(line => line.map(word => word.word)),
  englishTitle: 'Zero Centimeters',
  englishContent: englishContent.split('\n').filter(line => line),
}
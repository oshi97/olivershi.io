const titleData = [
  {
    word: '異世界',
    pronunciation: 'いせかい',
    romaji: 'i se kai',
    meaning: 'alternate universe/parallel world. 世界 (sekai) meaning world. '
  },
  {
    word: 'ショー',
    meaning: 'show',
    pronunciation: 'ショー',
    notes: 'this is an english word written with katakana'
  },
  {
    word: 'タイム',
    meaning: 'time',
    pronunciation: 'タイム',
    notes: 'this is an english word written with katakana'
  }
]

const contentData = [
  [
    {
      word: 'さあ',
      pronunciation: 'さあ',
      romaji: 'sa a',
      meaning: 'Used as a kind of interjection, something similar to "there is" maybe?'
    },
    {
      word: '異世界',
      pronunciation: 'いせかい',
      romaji: 'i se kai',
      meaning: 'alternate universe/parallel world. 世界 (sekai) meaning world. '
    },
    {
      word: 'から',
      pronunciation: 'から',
      romaji: 'ka ra',
      meaning: 'originating from'
    },
    {
      word: 'の',
      pronunciation: 'の',
      romaji: 'no',
      meaning: 'from',
      source: 'https://www.japaneseprofessor.com/lessons/beginning/modifying-particle-no/'
    },
    {
      word: '招待',
      pronunciation: 'しょうたい',
      romaji: 'sho tai (shi yo u ta i)',
      meaning: 'invitation'
    }
  ]
]

const englishContent = [
  'Here\'s an invitation from the other world'
]

export default {
  titleData: titleData,
  contentData: contentData,
  japaneseTitle: titleData.map(word => word.word),
  japaneseContent: contentData.map(line => line.map(word => word.word)),
  englishTitle: 'Isekai Showtime!',
  englishContent: englishContent,
}
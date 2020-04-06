import konosuba_ed_2 from '../../../data/japanese/konosuba_ed_2.json'

export default {
  text: konosuba_ed_2.text.map(line => line.map(word => word.word)),
  title: konosuba_ed_2.title.map(word => word.word),
  textTranslation: 'Leaving the house without saying a word',
  titleTranslation: 'Wanna Go Home',
  image: 'japanese/konosuba_ed_2.jpg'
}

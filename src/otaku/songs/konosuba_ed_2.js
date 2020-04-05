import konosuba_ed_2 from '../../../data/japanese/konosuba_ed_2.json'

console.log(konosuba_ed_2)

export default {
  text: konosuba_ed_2.text.map(line => line.map(word => word.word)),
  title: konosuba_ed_2.title.map(word => word.word),
  translation: 'Leaving the house without saying a word',
  image: 'japanese/konosuba_ed_2.jpeg'
}

import konosuba_ed_2 from '../../docs/api/japanese/konosuba_ed_2.json'
export default {
  // text: '何も言わずに家を出て',
  text: konosuba_ed_2.map(line => line.map(word => word.word)),
  translation: 'Leaving the house without saying a word'
}

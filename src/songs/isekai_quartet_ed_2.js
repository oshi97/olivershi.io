import isekai_quartet_ed_2 from '../../docs/api/japanese/isekai_quartet_ed_2.json'

export default {
  // text: 'さあ異世界からの招待',
  text: isekai_quartet_ed_2.map(line => line.map(word => word.word)),
  translation: 'Here\'s an invitation from the other world'
}
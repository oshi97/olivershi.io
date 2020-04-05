import isekai_quartet_op_2 from '../../../data/japanese/isekai_quartet_op_2.json'

console.log(isekai_quartet_op_2)

export default {
  text: isekai_quartet_op_2.text.map(line => line.map(word => word.word)),
  title: isekai_quartet_op_2.title.map(word => word.word),
  translation: 'Here\'s an invitation from the other world',
  image: 'japanese/isekai_quartet_op_2.jpg'
}
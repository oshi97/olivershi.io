import React from 'react'
import { fetchJapanese } from '../tools/ajax'

export default class Japanese extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      translatedText: [],
      dictionary: {}
    }
    this.handleMouseUp = this.handleMouseUp.bind(this)
  }

  componentDidMount() {
    fetchJapanese(this.props.file).then(dictionary => {
      this.sortedDictionaryKeys = Object.keys(dictionary).sort((a, b) => b.length - a.length)
      this.setState({ dictionary })
    })
    window.addEventListener('mouseup', this.handleMouseUp)
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.handleMouseUp)
  }

  removeOtherText (text) {
    let startIndex = 0
    let endIndex = text.length
    while (this.props.text.indexOf(text[startIndex]) === -1 && startIndex < text.length) {
      startIndex++
    }
    while (this.props.text.includes(text[startIndex]) === -1 && endIndex > startIndex) {
      endIndex--
    }
    return text.slice(startIndex, endIndex)
  }

  translate(text) {
    if (!text) {
      return []
    }
    for (let i = 0; i < this.sortedDictionaryKeys.length; i++) {
      const word = this.sortedDictionaryKeys[i]
      const index = text.indexOf(word)
      if (index === -1)
        continue
      else if (text === word)
        return [ word ]
      const secondHalf = text.slice(index + word.length)
      const firstHalf = text.slice(0, index)
      return [ ...this.translate(firstHalf), word, ...this.translate(secondHalf) ]
    }
    return [ text ]
  }

  handleMouseUp(e) {
    if (e.target.classList.contains('js-japanese-translation')) {
      return
    }
    this.updateTranslatedText()
  }

  updateTranslatedText() {
    const selectedText = window.getSelection().toString().trim()
    if (!selectedText) {
      return
    }
    // TODO remove other text may not work if there are multiple instances of the first word or last word
    // Need logic around anchor and focus node/offset, probably still need below logic
    // For when the translation text is neither the anchor nor focus node, though that's such a weird case
    // That honestly, I shouldn't even account for because that means the whole thing is just highlighted?
    // Actually, I could totally see myself doing that on a page
    // https://stackoverflow.com/questions/27241281/what-is-anchornode-basenode-extentnode-and-focusnode-in-the-object-returned
    const trimmedText = this.removeOtherText(selectedText)
    const translatedText = this.translate(trimmedText)
    const duplicatesRemoved = [...new Set(translatedText)]
    if (this.state.translatedText !== translatedText) {
      this.setState({ translatedText: duplicatesRemoved })
    }
  }

  renderWordTranslation(word) {
    const { dictionary } = this.state
    if (!dictionary[word]) {
      return null
    }
    const data = dictionary[word]
    return (
      <div key={word} className="japanese-translationWord js-japanese-translation">
        <div>{word}</div>
        {Object.keys(data).map(property => (
          <div key={property} className="japanese-translationProperty js-japanese-translation">
            {property}: {data[property]}
          </div>
        ))}
      </div>
    )
  }

  renderTranslatedText() {
    const { translatedText } = this.state
    return (
      <div>
        {translatedText.map(word => this.renderWordTranslation(word))}
      </div>
    )
  }

  render() {
    const { text } = this.props
    return (
      <div className="japanese">
        <div>Testing my weird translation thing</div>
        <div className="japanese-text">
          {text}
        </div>
        <div>Try highlighting stuff!</div>
        <br/>
        <br/>
        <br/>
        <div className="japanese-translation js-japanese-translation">
            {this.renderTranslatedText()}
        </div>
      </div>
    )
  }
}
import React from 'react'
import { fetchJapanese } from '../tools/ajax'

export default class Japanese extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      translatedText: '',
      dictionary: {}
    }
    this.updateTranslatedText = this.updateTranslatedText.bind(this)
  }

  componentDidMount() {
    fetchJapanese(this.props.file).then(dictionary => {
      this.sortedDictionaryKeys = Object.keys(dictionary).sort((a, b) => b.length - a.length)
      this.setState({ dictionary })
    })
    window.addEventListener('mouseup', this.updateTranslatedText)
  }

  removeOtherText (text) {
    let startIndex = 0
    let endIndex = text.length
    while (!this.props.text.includes(text[startIndex]) && startIndex < text.length) {
      startIndex++
    }
    while (!this.props.text.includes(text[startIndex]) && endIndex > startIndex) {
      endIndex--
    }
    return text.slice(startIndex, endIndex)
  }

  translate(text) {
    let tokens = [ text ];
    console.log('---', text)
    for (const word of this.sortedDictionaryKeys) {
      if (!text.includes(word))
        continue
      else if (text === word) {
        tokens = [ word ]
        break
      }
      const subTexts = text.split(word);
      console.log(text, word, subTexts)
      if (subTexts.length > 1)
        tokens = [ ...this.translate(subTexts[0]), word, ...this.translate(subTexts[1]) ]
      else if (text.startsWith(subTexts[0]))
        tokens = [ word, ...this.translate(subTexts[0])]
      else
        tokens = [ ...this.translate(subTexts[0]), word ]
      break
    }
    console.log('---', tokens)
    return tokens
  }

  updateTranslatedText() {
    const selectedText = window.getSelection().toString()
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
    if (this.state.translatedText !== translatedText) {
      this.setState({ translatedText })
    }
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.updateTranslatedText)
  }

  renderTranslatedText() {
    const { translatedText } = this.state
    return (
      <div>
        boo
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
        <div>Highlight test</div>
        <br/>
        <br/>
        <br/>
        <div className="japanese-translation">
            {this.renderTranslatedText()}
        </div>
      </div>
    )
  }
}
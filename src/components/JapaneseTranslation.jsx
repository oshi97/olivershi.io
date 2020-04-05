import React from 'react'

export default class JapaneseTranslation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lineIndex: -1,
      wordIndex: -1
    }
    this.onWordBlur = this.onWordBlur.bind(this)
  }

  onWordBlur() {
    this.setState({ lineIndex: -1, wordIndex: -1 })
  }

  componentDidMount() {
    window.addEventListener('click', this.onWordBlur)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onWordBlur)
  }

  onWordClick(e,lineIndex, wordIndex ) {
    e.stopPropagation()
    this.setState({ lineIndex, wordIndex })
  }

  _getOriginalWordClass(lineIndex, wordIndex) {
    if (lineIndex !== this.state.lineIndex || wordIndex !== this.state.wordIndex) {
      return "japanese-original-word"
    }
    return "japanese-original-word japanese-original-word--active"
  }

  renderJapaneseOriginal() {
    const { text, meanings } = this.props
    if (!Object.keys(meanings).length) {
      return <React.Fragment>{text}</React.Fragment>
    }
    return (
      <React.Fragment>
        {meanings.map((lineData, lineIndex) => 
          <div className="japanese-original-line" key={lineIndex + lineData.map(l => l.word).join('')}>
            {lineData.map((wordData, wordIndex) =>
              <div className={this._getOriginalWordClass(lineIndex, wordIndex)}
                key={wordIndex + wordData.word}
                onClick={e => this.onWordClick(e, lineIndex, wordIndex)}
              >
                {wordData.word}
              </div>
            )}
          </div>
        )}
      </React.Fragment>
    )
  }

  renderJapaneseMeaning() {
    const { lineIndex, wordIndex  } = this.state
    const { translation, meanings } = this.props
    if (lineIndex === -1 || wordIndex === -1) {
      return <React.Fragment>{translation}</React.Fragment>
    }
    const selectedWordData = meanings[lineIndex][wordIndex]
    const { word, meaning, romaji, pronunciation, notes, source } = selectedWordData
    return (
      <React.Fragment>
        <div>{word}</div>
        <div>meaning: {meaning}</div>
        <div>pronunciation: {pronunciation} {romaji}</div>
        {notes && <div>notes: {notes}</div>}
        {source && <div>source: <a href={source} target="_blank">{source}</a></div>}
      </React.Fragment>
    )
  }

  render() {
    return (
      <div className="japanese-translation">
        <div className="japanese-original">
          {this.renderJapaneseOriginal()}
        </div>
        <div className="japanese-translation-divider" onClick={e => e.stopPropagation()}></div>
        <div className="japanese-meaning" onClick={e => e.stopPropagation()}>
          {this.renderJapaneseMeaning()}
        </div>
      </div>
    )
  }
}
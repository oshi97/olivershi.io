import React from 'react'

export default class JapaneseTranslation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lineIndex: null,
      wordIndex: null
    }
    this.onWordBlur = this.onWordBlur.bind(this)
  }

  onWordBlur() {
    this.setState({ lineIndex: null, wordIndex: null })
  }

  componentDidMount() {
    window.addEventListener('click', this.onWordBlur)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onWordBlur)
  }

  onWordClick(e, lineIndex, wordIndex) {
    e.stopPropagation()
    this.setState({ lineIndex, wordIndex })
  }

  _getOriginalWordClass(li, wi) {
    const isSelected = li !== this.state.lineIndex || wi !== this.state.wordIndex
    if (isSelected) {
      return 'japanese-original-word'
    }
    return 'japanese-original-word japanese-original-word--active'
  }

  renderWord(lineIndex, wordIndex, word) {
    return (
      <div className={this._getOriginalWordClass(lineIndex, wordIndex)}
        key={wordIndex + word}
        onClick={e => this.onWordClick(e, lineIndex, wordIndex)}
      >
        {word}
      </div>
    )
  }

  renderOriginal() {
    const { japaneseContent } = this.props;
    return (
      <div className='japanese-original'>
        {japaneseContent.map((line, lineIndex) =>
          <div className='japanese-original-line' key={lineIndex + line.join('')}>
            {line.map((word, wordIndex) =>
              this.renderWord(lineIndex, wordIndex, word)
            )}
          </div>
        )}
      </div>
    )
  }

  renderMeaning() {
    const { lineIndex, wordIndex } = this.state
    const { englishContent, titleData, contentData } = this.props
    if (lineIndex === null || wordIndex === null) {
      return (
        <React.Fragment>
          {englishContent.map((line, i) => <div key={i}>{line}</div>)}
        </React.Fragment>
      )
    }
    const selectedWordData =
      lineIndex === -1 ? titleData[wordIndex] : contentData[lineIndex][wordIndex]
    const { word, meaning, romaji, pronunciation, notes, source } = selectedWordData
    return (
      <React.Fragment>
        <div>{word}</div>
        <div>meaning: {meaning}</div>
        <div>pronunciation: {pronunciation} {romaji}</div>
        {notes && <div>notes: {notes}</div>}
        {source &&
          <div>
            source:
            <a href={source} target='_blank' rel="noopener noreferrer">
              For more info
            </a>
          </div>}
      </React.Fragment>
    )
  }

  renderTitle() {
    const { japaneseTitle, englishTitle } = this.props
    return (
      <div className='japanese-translation-title'>
        <div className='japanese-original'>
          {japaneseTitle.map((word, wordIndex) =>
            this.renderWord(-1, wordIndex, word)
          )}
        </div>
        <div className='japanese-meaning' onClick={e => e.stopPropagation()}>{englishTitle}</div>
      </div>
    )
  }

  render() {
    return (
      <div className='japanese-translation'>
        {this.renderTitle()}
        <div className='japanese-translation-content'>
          {this.renderOriginal()}
          <div className='japanese-translation-divider' onClick={e => e.stopPropagation()}></div>
          <div className='japanese-meaning' onClick={e => e.stopPropagation()}>
            {this.renderMeaning()}
          </div>
        </div>
      </div>
    )
  }
}
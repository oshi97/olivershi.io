import React from 'react'
import JapaneseTranslation from './JapaneseTranslation'
import { fetchJapanese } from '../tools/ajax'

export default class SongLoader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      translationData: {}
    }
  }

  componentDidMount() {
		if (!Object.keys(this.state.translationData).length) {
			fetchJapanese(this.props.songName).then(translationData => this.setState({ translationData }))
		}
  }

  render() {
    const { text, title, textTranslation, titleTranslation } = this.props;
    const { translationData } = this.state;
    return (
      <JapaneseTranslation
        title={title}
        text={text}
        textTranslation={textTranslation}
        titleTranslation={titleTranslation}
        titleData={translationData.title}
        textData={translationData.text}
      />
    )
  }
}
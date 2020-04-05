import React from 'react'
import JapaneseTranslation from '../components/JapaneseTranslation'
import { fetchJapanese } from '../tools/ajax'

export default class SongLoader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      meanings: []
    }
  }

  componentDidMount() {
		if (!this.state.meanings.length) {
			fetchJapanese(this.props.songName).then(meanings => this.setState({ meanings }))
		}
  }

  render() {
    return (
      <div className='japanese-lyrics'>
        <JapaneseTranslation text={this.props.text}
          translation={this.props.translation}
          meanings={this.state.meanings}
        />
      </div>
    )
  }
}
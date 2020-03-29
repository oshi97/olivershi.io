import React from 'react'
const lyrics = '何も言わずに家を出て'

import { fetchJapanese } from '../tools/ajax'

export default class Konosuba_ed_2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      japaneseJson: {}
    }
  }
  componentDidMount() {
    fetchJapanese('konosuba_ed_2').then(japaneseJson => this.setState({ japaneseJson }))
  }

  renderChar(char) {
    return (
      <div>{char}</div>
    )
  }

  render() {
    return (
      <React.Fragment>
        <div>{lyrics}</div>
        <div>{Object.keys(this.state.japaneseJson).map(char => this.renderChar(char))}</div>
      </React.Fragment>
    )
  }
}

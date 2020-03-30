import React from 'react'
import Switch from './components/Switch'
import Link from './components/Link'
import Konosuba_ed_2 from './otaku/konosuba_ed_2'

export default class Otaku extends React.Component {
  constructor(props) {
    super(props)
    this.routes = {
      '/otaku/konosuba_ed_2': <Konosuba_ed_2/>,
      'default': this.renderDirectory()
    };
  }

  renderDirectory() {
    return (
      <div className='otaku-navbar'>
        <Link cssClasses='otaku-item' href='/otaku/konosuba_ed_2'>
          konosuba_ed_2
        </Link>
      </div>
    )
  }

  render() {
    return (
      <div>
        <Switch routes={this.routes} exact={true}></Switch>
      </div>
    )
  }
}
import React from 'react'
import Switch from '../router/Switch'
import Link from '../router/Link'
import Daoko from './Daoko'

export default class Otaku extends React.Component {
  constructor(props) {
    super(props)
    this.routes = {
      '/otaku/daoko': <Daoko/>,
      'default': this.renderDirectory()
    };
  }

  renderDirectory() {
    return (
      <div className='otaku-navbar'>
        <Link className='item' href='/otaku/daoko'>
          Daoko
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
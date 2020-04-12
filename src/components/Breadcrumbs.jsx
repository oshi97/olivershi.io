import React from 'react'
import Link from './Link'

export default class BreadCrumbs extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pathname: window.location.pathname
    }
		this.handleHistoryChange = this.handleHistoryChange.bind(this)
  }
  
  getCrumbs () {
    return window.location.pathname.split('/')
  }

	componentDidMount () {
		window.addEventListener('history.pushstate', this.handleHistoryChange)
		window.addEventListener('popstate', this.handleHistoryChange)
	}

	componentWillUnmount () {
		window.removeEventListener('history.pushstate', this.handleHistoryChange)
		window.removeEventListener('popstate', this.handleHistoryChange)
	}

	handleHistoryChange () {
    if (this.state.pathname === window.location.pathname) 
      return
    this.setState({
      pathname: window.location.pathname
    })
  }
  
  render () {
    let href = ''
    const crumbs = [
      <Link key='home' href={'/'}>home</Link>
    ]
    this.state.pathname.split('/').filter(c => c).forEach(c => {
      href += '/' + c
      crumbs.push(
        <div className='breadcrumbs-dividor'>></div>
      )
      crumbs.push(
        <Link className='breadcrumbs-link' key={c} href={href}>{c}</Link>
      )
    })
    return (
      <div className='breadcrumbs'>
        {crumbs}
      </div>
    )
  }
}
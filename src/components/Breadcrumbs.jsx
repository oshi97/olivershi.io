import React from 'react'
import Link from './Link'

export default class BreadCrumbs extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pathname: window.location.pathname,
      previousPathname: ''
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
      pathname: window.location.pathname,
      previousPathname: this.state.pathname
    })
  }
  
  render () {
    const { pathname, previousPathname } = this.state
    let href = ''
    const splitPath = pathname.split('/').filter(c => c)
    const activeCrumbs = splitPath.map(c => ({
      href: href += '/' + c,
      value: c
    }))
    if (activeCrumbs.length) {
      activeCrumbs[activeCrumbs.length - 1].className = 'breadcrumbs-active'
    }
    let previousCrumbs = []
    if (previousPathname.startsWith(pathname)) {
      const previousSplitPath = previousPathname.replace(pathname, '').split('/').filter(c => c)
      previousCrumbs = previousSplitPath.map(c => ({
        href: href += '/' + c,
        value: c
      }))
    }
    return (
      <div className='breadcrumbs'>
        <Link className={!activeCrumbs.length && 'breadcrumbs-active'} href='/'>home</Link>
        {activeCrumbs.map((c, index) => 
          <React.Fragment>
            <div key={c + '-divider'}>></div>
            <Link className={c.className} key={c.value + '/active'} href={c.href}>
              {c.value}
            </Link>
          </React.Fragment>
        )}
        {previousCrumbs.map(c => 
          <React.Fragment>
            <div key={c + '-divider'} className='breadcrumbs-previous'>></div>
            <Link className='breadcrumbs-previous' key={c.key + '/previous'} href={c.href}>
              {c.value}
            </Link>
          </React.Fragment>
        )}
      </div>
    )
  }
}
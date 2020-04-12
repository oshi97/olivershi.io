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
    const paths = [this.state.pathname, this.state.previousPathname, window.location.pathname]
    const longerPathname = paths.reduce(function (a, b) { return a.length > b.length ? a : b; });
    this.setState({
      pathname: window.location.pathname,
      previousPathname: longerPathname
    })
  }
  
  render () {
    const { pathname, previousPathname } = this.state
    let href = ''
    const splitPath = pathname.split('/').filter(c => c)
    const currentCrumbs = splitPath.map(c => ({
      href: href += '/' + c,
      value: c
    }))
    if (currentCrumbs.length) {
      currentCrumbs[currentCrumbs.length - 1].className = 'breadcrumbs-active'
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
        <Link key='home' className={!currentCrumbs.length && 'breadcrumbs-active'} href='/'>home</Link>
        {currentCrumbs.map(c => 
          <React.Fragment key={c.href + '/current'}>
            <div>></div>
            <Link className={c.className}  href={c.href}>
              {c.value}
            </Link>
          </React.Fragment>
        )}
        {previousCrumbs.map(c => 
          <React.Fragment key={c.href + '/previous'}>
            <div className='breadcrumbs-previous'>></div>
            <Link className='breadcrumbs-previous' href={c.href}>
              {c.value}
            </Link>
          </React.Fragment>
        )}
      </div>
    )
  }
}
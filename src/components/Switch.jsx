import { Component } from 'react'

export default class Switch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      route: this.getRenderedRoute()
    }
    this.updatePathname = this.updatePathname.bind(this)
  }

  updatePathname() {
    const route = this.getRenderedRoute()
    if (this.state.route !== route) {
      this.setState({ route })
    }
  }

  componentDidMount() {
    window.addEventListener('history.pushstate', this.updatePathname)
    window.addEventListener('popstate', this.updatePathname)
  }

  componentWillUnmount() {
    window.removeEventListener('history.pushstate', this.updatePathname)
    window.removeEventListener('popstate', this.updatePathname)
  }

  getRenderedRoute() {
    const routes = this.props.routes || {}
    const pathname = window.location.pathname
    for (const path of Object.keys(routes)) {
      if (pathname.startsWith(path)) {
        return path
      }
    }
  }

  render() {
    const routes = this.props.routes || {}
    if (this.state.route in routes) {
      return routes[this.state.route]
    }
    if (routes['default'] && this.props.defaultURL) {
      window.location.href = this.props.defaultURL
    }
    return routes['default'] || routes['404'] || (
      <div>
        404, {this.state.route} not found in {JSON.stringify(Object.keys(routes))}!
      </div>
    )
  }
}
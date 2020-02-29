import React from 'react'

export default class Switch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pathname: window.location.pathname
        }
        this.updatePathname = this.updatePathname.bind(this);
    }

    updatePathname() {
        this.setState({ pathname: window.location.pathname })
    }


    componentDidMount() {
        window.addEventListener('history.pushstate', this.updatePathname)
        window.addEventListener('popstate', this.updatePathname)
    }

    componentWillUnmount() {
        window.removeEventListener('history.pushstate', this.updatePathname)
        window.removeEventListener('popstate', this.updatePathname)
    }

    render() {
        const routes = this.props.routes;
        const pathname = this.state.pathname;
        for (let path in routes) {
            if (pathname === path) {
                return routes[path]
            }
        }
        if (routes['default'] && this.props.defaultURL) {
            window.location.href = this.props.defaultURL
        }
        return routes['default'] || routes['404'] || (
            <div>
                404, {pathname} not found in {JSON.stringify(Object.keys(routes))}!
            </div>
        );
    }
}
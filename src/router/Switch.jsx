import React from 'react'

export default class Switch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pathname: window.location.pathname
        }
    }

    componentDidMount() {
        window.addEventListener('history.pushstate', () => {
            this.setState({ pathname: window.location.pathname })
        })
    }

    render() {
        const routes = this.props.routes;
        const pathname = this.state.pathname;
        for (let path in routes) {
            if (pathname.startsWith(path)) {
                return routes[path]
            }
        }
        return routes['404'] || (
            <div>
                404, {pathname} not found in {JSON.stringify(Object.keys(routes))}!
            </div>
        );
    }
}
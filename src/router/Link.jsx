import React from 'react'

export default class Link extends React.Component {
    pushState() {
        history.pushState({}, '', this.props.href)
        window.dispatchEvent(new Event('history.pushstate'))
    }

    render() {
        return (
            <div className={this.props.className} onClick={this.pushState.bind(this)}>
                {this.props.children}
            </div>
        )
    }
}
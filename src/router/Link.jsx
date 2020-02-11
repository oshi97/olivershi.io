import React from 'react'
import './Link.css'

export default class Link extends React.Component {
    pushState() {
        history.pushState({}, '', this.props.href)
        window.dispatchEvent(new CustomEvent('history.pushstate'))
    }

    render() {
        return (
            <div className={this.props.className + ' link'} onClick={this.pushState.bind(this)}>
                {this.props.children}
            </div>
        )
    }
}
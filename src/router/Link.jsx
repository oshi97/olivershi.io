import React from 'react'

export default class Link extends React.Component {
    pushState() {
        history.pushState({}, '', this.props.href)
        window.dispatchEvent(new CustomEvent('history.pushstate'))
    }

    render() {
        let className = 'link'
        if (this.props.className && this.props.className !== '')
            className += ' ' + this.props.classname;
        return (
            <div className={className} onClick={this.pushState.bind(this)}>
                {this.props.children}
            </div>
        )
    }
}
import React from 'react'

export default class Link extends React.Component {
    pushState() {
        history.pushState({}, '', this.props.href)
        window.dispatchEvent(new CustomEvent('history.pushstate'))
    }

    getCssClasses() {
        let className = 'link'
        if (this.props.className)
            className += ' ' + this.props.className;
        return className;
    }

    render() {
        return (
            <div className={this.getCssClasses()} onClick={this.pushState.bind(this)}>
                {this.props.children}
            </div>
        )
    }
}
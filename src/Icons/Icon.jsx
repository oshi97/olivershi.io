import React from 'react'

const validIcons = ['home', 'libary_music', 'videogame_asset']
const Icon = ({ type, size }) => {
    if (!type || validIcons.indexOf(type) === -1) {
        return <div></div>;
    }
    if (!size) {
        size = 24
    }
    const svg = require(`./svg/${type}-${size}px.svg`)
    const markup = {
        __html: svg
    }
    return <div className={'Icon-' + type + '-' + size} dangerouslySetInnerHTML={markup}></div>
}
export default Icon
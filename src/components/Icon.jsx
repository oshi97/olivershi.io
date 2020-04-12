import React from 'react'

const validIcons = ['home-black', 'library_music-black', 'videogame_asset-black']
const Icon = ({ type, size }) => {
    if (!type || validIcons.indexOf(type) === -1) {
        console.warn(`Icon type: ${type} not found in ${validIcons}`)
        return <div></div>;
    }
    if (!size) {
        size = 24
    }
    const svg = require(`../icons/${type}-${size}dp.svg`)
    const markup = {
        __html: svg
    }
    return <div className={'Icon Icon-' + type + '-' + size} dangerouslySetInnerHTML={markup}></div>
}
export default Icon
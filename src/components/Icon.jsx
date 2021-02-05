import React from 'react'

const validIcons = ['face-black', 'home-black', 'library_music-black', 'videogame_asset-black', 'face-black']
const Icon = ({ type, size }) => {
  if (!type || validIcons.indexOf(type) === -1) {
    console.warn(`Icon type: ${type} not found in ${validIcons}`)
    return <div></div>
  }
  if (!size) {
    size = 24
  }
  const svg = require(`../icons/${type}-${size}dp.svg`).default
  const markup = {
    __html: svg
  }
  return <div className={'Icon Icon-' + type + '-' + size} dangerouslySetInnerHTML={markup}></div>
}
export default Icon
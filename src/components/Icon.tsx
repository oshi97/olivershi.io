const validIcons = ['face-black', 'home-black', 'library_music-black', 'videogame_asset-black', 'face-black']
const Icon = ({ type, size = 24 }: {
  type: string,
  size?: number
}) => {
  if (!type || validIcons.indexOf(type) === -1) {
    console.warn(`Icon type: ${type} not found in ${validIcons}`)
    return <div></div>
  }
  const svg = require(`../icons/${type}-${size}dp.svg`).default
  const markup = {
    __html: svg
  }
  return <div className={'Icon Icon-' + type + '-' + size} dangerouslySetInnerHTML={markup}></div>
}
export default Icon
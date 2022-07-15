import { ReactComponent as faceIcon } from '../icons/face-black-24dp.svg'
import { ReactComponent as homeIcon } from '../icons/home-black-24dp.svg'
import { ReactComponent as musicIcon } from '../icons/library_music-black-24dp.svg'
import { ReactComponent as gameIcon } from '../icons/videogame_asset-black-24dp.svg'

const validIcons = {
  'face-black': faceIcon,
  'home-black': homeIcon,
  'library_music-black': musicIcon,
  'videogame_asset-black': gameIcon
} as const

const Icon = ({ type, size = 24 }: {
  type: string,
  size?: number
}) => {
  if (!type || !(type in validIcons)) {
    console.warn(`Icon type: ${type} not found in ${validIcons}`)
    return <div></div>
  }
  const Icon = validIcons[type as keyof typeof validIcons]
  return (
    <div className={'Icon Icon-' + type + '-' + size}>
      <Icon/>
    </div>
  )
}
export default Icon
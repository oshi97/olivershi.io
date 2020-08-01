import React from 'react'
import Switch from '../src/components/Switch'
import Link from '../src/components/Link'
import Image from '../src/components/Image'
import JapaneseTranslation from '../src/components/JapaneseTranslation'

const _context = require.context('../data/japanese/', true, /\.js$/)
const songContext = _context.keys().reduce((songContext, key) => {
  const _key = key.replace('./', '').replace('.js', '')
  const translationData = _context(key).default
  songContext[_key] =  <JapaneseTranslation {...translationData}/>
  return songContext
}, {})

const songRoutes = Object.keys(songContext).reduce((songRoutes, key) => {
  const _key = '/otaku/' + key
  songRoutes[_key] = songContext[key]
  return songRoutes
}, {})

const Otaku = () => (
  <Switch routes={{ ...songRoutes, default: <Directory/>}} exact={true}></Switch>
)

const Directory = () => (
  <div className='otaku-navbar'>
    {Object.keys(songContext).map(songName => (
      <Link key={songName} className='otaku-item' href={'/otaku/' + songName}>
        {songName}
        <Image className="otaku-item-image" src={'japanese/'+songName}/>
      </Link>
    ))}
  </div>
)

export default Otaku

import React from 'react'
import Switch from './components/Switch'
import Link from './components/Link'
import Image from './components/Image'
import JapaneseTranslation from './components/JapaneseTranslation'

const SongLoader = ({ songName }) => {
  const translationData = require(`../data/japanese/${songName}`).default
  return <JapaneseTranslation {...translationData}/>
}
const songFiles = ['isekai_quartet_op_2', 'konosuba_ed_2', 'takagi_op_2']
const songRoutes = {}
for (const songName of songFiles) {
  songRoutes['/otaku/' + songName] = <SongLoader songName={songName}/>
}

const Otaku = () => (
  <Switch routes={{ ...songRoutes, 'default': <Directory/>}} exact={true}></Switch>
)

const Directory = () => (
  <div className='otaku-navbar'>
    {songFiles.map(songName => (
      <Link key={songName} className='otaku-item' href={'/otaku/' + songName}>
        {songName}
        <Image className="otaku-item-image" src={'japanese/'+songName}/>
      </Link>
    ))}
  </div>
)

export default Otaku

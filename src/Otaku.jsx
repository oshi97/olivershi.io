import React from 'react'
import Switch from './components/Switch'
import Link from './components/Link'
import songs from './otaku/songs'
import SongLoader from './otaku/SongLoader'
import Image from './components/Image'

const songRoutes = {}
for (const songName of Object.keys(songs)) {
  const { text, title, translation } = songs[songName]
  songRoutes['/otaku/' + songName] =
    <SongLoader songName={songName}
      text={text}
      title={title}
      translation={translation}/>
}

const Otaku = () => (
  <Switch routes={{ ...songRoutes, 'default': <Directory/>}} exact={true}></Switch>
)

const Directory = () => (
  <div className='otaku-navbar'>
    {Object.keys(songs).map(songName => (
      <Link key={songName} className='otaku-item' href={'/otaku/' + songName}>
        {songName}
        <Image className="otaku-item-image" src={songs[songName].image}/>
      </Link>
    ))}
  </div>
)

export default Otaku

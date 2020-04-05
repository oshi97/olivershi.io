import React from 'react'
import Switch from './components/Switch'
import Link from './components/Link'
import songs from './songs/songs'
import SongRouter from './SongRouter'


const songRoutes = {}
for (const songName of Object.keys(songs)) {
  const { text, translation } = songs[songName]
  songRoutes['/otaku/' + songName] =
    <SongRouter songName={songName}
      text={text}
      translation={translation}/>
}

const Otaku = () => (
  <Switch routes={{ ...songRoutes, 'default': <Directory/>}} exact={true}></Switch>
)

const Directory = () => (
  <div className='otaku-navbar'>
    {Object.keys(songs).map(songName => (
      <Link cssClasses='otaku-item' href={'/otaku/' + songName}>
        {songName}
      </Link>
    ))}
  </div>
)

export default Otaku

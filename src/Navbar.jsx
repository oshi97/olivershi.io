import Image from './components/Image'
import Icon from './components/Icon'
import Link from './components/Link'
import { PropsWithChildren } from 'react'

const Navbar = () => (
  <div className='navbar'>
    <Link className='navbar-link navbar-link--first' href='/'>
      <Icon type='home-black'/>
			Home
    </Link>
    <Link className='navbar-link' href='/sheets'>
      <Icon type='library_music-black'/>
			Sheets
    </Link>
    <Link className='navbar-link' href='/otaku'>
      <Image className='navbar-rem' src='optimized_rem.gif'/>
			オタク
    </Link>
    <Link className='navbar-link' href='/blog'>
      <Icon type='face-black'/>
			Random!
    </Link>
    <Link className='navbar-link' href='/genshin'>
      <Icon type='face-black'/>
			Genshin!
    </Link>
    <a className='link navbar-link navbar-link-dome' href='/dome/index.html' target='_blank'>
      <Icon type='videogame_asset-black'/>
			Dome
    </a>
  </div>
)

export default Navbar
import Image from 'Components/Image'
import Icon from 'Components/Icon'
import Link from 'Components/Link'

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
    <a className='link navbar-link navbar-link-dome' href='/dome/index.html' target='_blank'>
      <Icon type='videogame_asset-black'/>
			Dome
    </a>
  </div>
)

export default Navbar
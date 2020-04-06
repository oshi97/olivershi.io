import React from 'react'
import Image from './components/Image'
import Icon from './components/Icon'
import Link from './components/Link'

const Navbar = () => (
	<div className='navbar'>
		<Link href='/'>
			<Icon type='home'/>
			Home
		</Link>
		<Link href='/sheets'>
			<Icon type='library_music'/>
			Sheets
		</Link>
		<Link href='/otaku'>
			<div className='navbar-rem' style={{
				backgroundImage: `url('https://${window.location.host}/public/images/rem_0.gif')`
			}}>
				<Image src='rem.gif'/>
			</div>
			オタク
		</Link>
		<a className='link' href='/dome/index.html' target='_blank'>
			<Icon type='videogame_asset'/>
			Dome
		</a>
	</div>
)

export default Navbar
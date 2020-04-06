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
			<Image className='navbar-rem' src='rem.gif'/>
			オタク
		</Link>
		<a className='link' href='/dome/index.html' target='_blank'>
			<Icon type='videogame_asset'/>
			Dome
		</a>
	</div>
)

export default Navbar
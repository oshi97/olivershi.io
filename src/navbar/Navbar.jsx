import React from 'react'
import Image from '../components/Image'

import Link from '../router/Link'
const Navbar = () => (
	<div className='navbar'>
		<Link href='/'>
			<i className='material-icons'>home</i>
			Home
		</Link>
		<Link href='/sheets'>
			<i className='material-icons'>library_music</i>
			Sheets
		</Link>
		<Link href='/otaku'>
			<Image src='rem.gif'/>
			オタク
		</Link>
		<a className='link' href='/dome/index.html' target='_blank'>
			<i className='material-icons'>videogame_asset</i>
			Dome
		</a>
	</div>
)

export default Navbar
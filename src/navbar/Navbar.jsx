import React from 'react'
import './Navbar.css'
import Image from '../components/Image'

import { Link } from '../router/Router'
const Navbar = () => (
	<div className='navbar'>
		<Link className='item' href='/'>
			<i className='material-icons'>home</i>
			Home
		</Link>
		<Link className='item' href='/sheets'>
			<i className='material-icons'>library_music</i>
			Sheets
		</Link>
		<Link className='item' href='/otaku'>
			<Image src='rem.gif'/>
			オタク
		</Link>
		<a className='item' href='/dome/index.html' target='_blank'>
			<i className='material-icons'>videogame_asset</i>
			Dome
		</a>
	</div>
)

export default Navbar
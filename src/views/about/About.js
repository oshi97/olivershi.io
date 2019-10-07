import React from 'react'
import Poem from './poem/Poem'
import FourOhFour from '../../components/FourOhFour'
import PlainEnglish from './plain-english/PlainEnglish'
import Me from './me/Me'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './About.css'

const AboutNav = () => (
	<div className='nav'>
		<ul className='nav-list'>
			<li>
				<Link to='/about/poem'> Weird Poem </Link>
			</li>
			<li>
				<Link to='/about/plain-english'> Plain English </Link>
				</li>
			<li>
				<Link to='/about/me'> The Creator (of the site) </Link>
			</li>
		</ul>
	</div>
)

const AboutRouter = () => (
	<Switch>
		<Route path='/about/poem' exact component={Poem} />
		<Route path='/about/plain-english' exact component={PlainEnglish} />
		<Route path='/about/me' exact component={Me} />
		<Route component={FourOhFour} />
	</Switch>
)   

const About = () => (
	<div className='about-container'>
		<AboutNav/>
		<AboutRouter/>
	</div>
)

export default About


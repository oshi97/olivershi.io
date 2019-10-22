import React from 'react'
import Image from '../../components/Image'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import './About.css'
import '../home/Home.css'

const AboutNav = () => (
	<div className='nav'>
		<ul className='nav-list'>
			<li>
				<Link to='/about'> About me </Link>
			</li>
		</ul>
	</div>
)

const AboutRouter = () => (
	<Switch>
		<Route path='/about' exact component={Default} />
		<Route>
			<Redirect to='/about'/>
		</Route>
	</Switch>
)   

const About = () => (
	<div className='about-container'>
		<AboutNav/>
		<AboutRouter/>
	</div>
)

const Default = () => (    
	<div className='me-container'>
		<div className='me'>{`
			Hi, I'm Oliver and I have no idea what I'm doing here. 
			You wouldn't have clicked that link unless you felt that way, OR are some kind of web robot, 
			so I can assume you likely feel the same way, at least for the subset of your life that 
			is idling on this page. So I guess we just, um, related to each other, if that's of
			any relevance.

			Whee.
			`}
		</div>
		<Image className='me-pic' src='turtle.png'></Image>
		<Image className='me-pic' src='fish.png'></Image>
		<Image className='me-pic' src='piano-beluga.gif'></Image>
		<Image className='me-pic' src='avocado.gif'></Image>
	</div>
)

export default About


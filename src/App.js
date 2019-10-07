import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import './views/home/Home.css'

import Home from './views/home/Home.js'
import FourOhFour from './components/FourOhFour.js'
import About from './views/about/About.js'

const Navbar = () => (
	<nav className='navbar'>
		<Link className='logo' to='/'> 
			<i className='material-icons home-icon'> home </i> 
			<div className='home-text'> Diary of a sad asian boy </div>
		</Link>
		<ul className='main-nav'>
			<li>
				<Link to='/about/poem'> What is this page? </Link>
			</li>
		</ul>
	</nav>
)

const App = () => (
	<div>
		<Router>
			<Navbar />
			<div className='container-grid'>
				<Switch>
					<Route path='/about/' component={About}/>
					<Route path='/home/' component={Home}/>
					<Route path='/' exact>
						<Redirect to='/home/'/>
					</Route>
					<Route component={FourOhFour}/>
				</Switch>
			</div>
		</Router>
	</div>
)

export default App;
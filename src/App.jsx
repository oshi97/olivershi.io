import React from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import './home/Home.css'

import Home from './home/Home'
import About from './about/About'
import Sheets from './sheets/Sheets'

const Navbar = () => (
	<nav className='navbar'>
		<Link className='logo' to='/'> 
			<i className='material-icons home-icon'> home </i> 
			<div className='home-text'> Lost in the 21st Century </div>
		</Link>
		<ul className='main-nav'>
			<li>
				<Link to='/about'> About </Link>
			</li>
			<li>
				<Link to='/sheets'> Sheets </Link>
			</li>
		</ul>
	</nav>
)

const App = () => (
	<Router>
		<Navbar />
		<div className='container-grid'>
			<Switch>
				<Route path='/about' component={About}/>
				<Route path='/home' component={Home}/>
				<Route path='/sheets' component={Sheets}/>
				<Redirect to='/home'/>
			</Switch>
		</div>
	</Router>
)

ReactDOM.render(<App />, document.getElementById("root"));
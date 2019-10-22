
import React from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import './admin-home/AdminHome.css'

import AdminHome from './admin-home/AdminHome'

const Navbar = () => (
	<nav className='navbar'>
		<Link className='logo' to='/'> 
			<i className='material-icons home-icon'> home </i> 
			<div className='home-text'> Lost in the 21st Century ~Admin~</div>
		</Link>
	</nav>
)

const App = () => (
	<Router>
		<Navbar/>
		<Switch>
			<Route path='/admin/' component={AdminHome}/>
			<Redirect to='/admin/'/>
		</Switch>
	</Router>
)

ReactDOM.render(<App />, document.getElementById("root"));
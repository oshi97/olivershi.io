import React, { Component} from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import "./App.css"

const Home = () => {
	return (
			<div> HOME! </div>
	)
}

const FourOhFour = () => {
	return (
			<div> Congrats you hit the 404! </div>
	)
}

const About = () => {
	return (
			<div> About me ! </div>
	)
}

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/"> Home </Link>
				</li>
				<li>
					<Link to="/about"> About </Link>
				</li>
			</ul>
		</nav>
	)
}

class App extends Component{
	render() {
		return (
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" exact component={About} />
					<Route path="*" component={FourOhFour} />
				</Switch>
			</Router>
		)
	}
}

export default App;
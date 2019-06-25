import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import "./App.css"

import Home from "./components/Home.js"
import Navbar from "./components/Navbar.js"
import FourOhFour from "./components/FourOhFour.js"
import About from "./components/About.js"

class App extends Component{
	render() {
		return (
			<div>
				<Router>
					<Navbar />
					<div className="container-grid">
						<Switch>
							<Route path="/about" exact component={About} />
							<Route path="/" exact component={Home} />
							<Route component={FourOhFour} />
						</Switch>
					</div>
				</Router>
			</div>
		)
	}
}

export default App;
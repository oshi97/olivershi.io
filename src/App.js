import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import "./views/home/Home.css"

import Home from "./views/home/Home.js"
import Navbar from "./views/home/Navbar.js"
import FourOhFour from "./components/FourOhFour.js"
import About from "./views/about/About.js"

class App extends Component{
	render() {
		return (
			<div>
				<Router>
					<Navbar />
					<div className="container-grid">
						<Switch>
							<Route path="/about/" component={About} />
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
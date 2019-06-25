import React from "react"
import Poem from "./Poem.js"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import AboutNav from "./AboutNav.js"
import FourOhFour from "../../components/FourOhFour.js"
import "./About.css"

const About = () => {
	return (
		<div>
			<AboutNav />
			<Switch>
				<Route path="/about/poem" exact component={Poem} />
				<Route path="/about/actual-english" exact component={Poem} />
				<Route path="/about/me" exact component={Poem} />
				<Route component={FourOhFour} />
			</Switch>
		</div>
	)
}
export default About;


import React from "react"
import Poem from "./Poem.js"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import AboutNav from "./AboutNav.js"
import FourOhFour from "../../components/FourOhFour.js"
import PlainEnglish from "./PlainEnglish.js"
import Me from "./Me.js"
import "./About.css"

const About = () => {
	return (
		<div className="about-container">
			<AboutNav />
			<Switch>
				<Route path="/about/poem" exact component={Poem} />
				<Route path="/about/plain-english" exact component={PlainEnglish} />
				<Route path="/about/me" exact component={Me} />
				<Route component={FourOhFour} />
			</Switch>
		</div>
	)
}
export default About;


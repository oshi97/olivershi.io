import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import "./AboutNav.css"

const AboutNav = () => {
	return (
		<ul className="about-nav">
			<li>
				<Link to="/about/poem"> Weird Poem </Link>
        <Link to="/about/actual-english"> Actual English </Link>
        <Link to="/about/me"> The Creator (of the site) </Link>
			</li>
		</ul>
	)
}

export default AboutNav;
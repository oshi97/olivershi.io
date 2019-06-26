import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import "./AboutNav.css"

const AboutNav = () => {
	return (
		<div className="nav">
			<ul className="nav-list">
				<li>
					<Link to="/about/poem"> Weird Poem </Link>
				</li>
				<li>
					<Link to="/about/plain-english"> Plain English </Link>
					</li>
				<li>
					<Link to="/about/me"> The Creator (of the site) </Link>
				</li>
			</ul>
		</div>
	)
}

export default AboutNav;
import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import "../App.css"

const MainNav = ({ classy }) => {
	return (
		<ul className={ classy }>
			<li>
				<Link to="/about"> What is this page? </Link>
			</li>
		</ul>
	)
}

class Navbar extends Component {
	constructor(props) {
    super(props)
    this.state = {isToggleOn: false}
    this.handleClick = this.handleClick.bind(this)
	}
	
	handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

	render() {
		let className = "main-nav"
		if (this.state.isToggleOn) 
			className += " active"

		return (
			<nav className="navbar">
				<span className="navbar-toggle">
					<i className="fas fa-bars" onClick={this.handleClick}></i>
				</span>
				<Link className="logo" to="/"> logos </Link>
				<MainNav classy={className} />
			</nav>
		)
	}
}

export default Navbar;
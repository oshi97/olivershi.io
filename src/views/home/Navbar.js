import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import "./Home.css"

const MainNav = ({ classy }) => {
	return (
		<ul className={ classy }>
			<li>
				<Link to="/about/poem"> What is this page? </Link>
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
					<i className="material-icons" onClick={this.handleClick}>list</i>
				</span>
				<Link className="logo" to="/"> 
					<i className="material-icons home-icon"> home </i> 
					<div className="home-text"> Home </div>
				</Link>
				<MainNav classy={className} />
			</nav>
		)
	}
}

export default Navbar;
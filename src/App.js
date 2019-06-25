import React, { Component} from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import "./App.css"

const baseImgUrl = "/images"
// image url, title, link, date, description
const PostPreview = (props) => {
	return (
		<div className="post-preview">
			<Link to={props.link ? props.link : '/'} className="post-preview-img-container"> 
				<div className="post-preview-img-background">
					<img className="post-preview-img" src={baseImgUrl + "/" + props.imgUrl}></img>
					<div className="post-preview-img-date"> {props.date} </div>
					<div className="post-preview-img-text"> Read More </div>
				</div>
			</Link>
			<div className="desc-container">
				<Link to={props.link ? props.link : '/'} className="preview-title-link">
					<div className="preview-title"> {props.title} </div>
				</Link>
				<Link to={props.link ? props.link : '/'} className="preview-desc-link">
					<div className="preview-desc"> {props.desc} </div>
				</Link>
			</div>

		</div>
	)
}

const Home = () => {
	return (
			<ul className="post-preview-list">
				<li>
					<PostPreview title="title1" date="novemeber whenever" desc="post numbrr 1" imgUrl="1.jpg" date="Novemeber whenever" link="1"/>
				</li>
				<li>				
					<PostPreview title="title2" date="fun time" desc="My 7-Year Pursuit of How To Live A near-death experience, an improbable disorder, and a global quest for answers Dakar,  " imgUrl="2.jpg" link="2" />
				</li>
				<li>				
					<PostPreview title="title3" date="wheeee a watch" desc="lorem eisdfaasdf epsom salt" imgUrl="piano-beluga.gif" link="2" />
				</li>
				<li>				
					<PostPreview title="title4" date="some time" desc="i am tree. lorem. ipsum." imgUrl="4.jpeg" link="2" />
				</li>
			</ul>
	)
}

const FourOhFour = () => {
	return (
			<div className="four-oh-four-container"> 
				<div>
					Congrats you hit the 404! 
				</div>
				<div>
					Back to home! 
				</div>
				<Link to="/"> 
					<img src={baseImgUrl + "/avocado.gif"}></img>
				</Link>
			</div>
	)
}

const About = () => {
	return (
			<div> That's a great question! </div>
	)
}

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
	
	handleClick(e) {
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
				<Link className="logo" to="/"> logo </Link>
				<MainNav classy = {className} />
			</nav>
		)
	}
}

const Test = () => {
	return (
		<div> TESTING ISDNGF </div>
	)
}

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
							<Route path="/test" exact component={Test} />
							<Route component={FourOhFour} />
						</Switch>
					</div>
				</Router>
			</div>
		)
	}
}

export default App;
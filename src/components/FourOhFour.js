import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import "../App.css"
const baseImgUrl = "/images"

const FourOhFour = () => {
	return (
			<div className="four-oh-four-container"> 
				<div>
					Congrats, you hit the 404! 
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
export default FourOhFour;
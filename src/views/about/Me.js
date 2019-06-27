import React from "react"
import "./Me.css"

const Me = () => {
	return (
    <div className="me-container">
      <div className="me">{`
        Hi, I'm Oliver! I'm not really sure what to say beyond that. 
        
        Here are some pictures I like I guess.
        `}
		  </div>
      <img className="me-pic" src="/images/turtle.png"></img>
      <img className="me-pic" src="/images/fish.png"></img>
      <img className="me-pic" src="/images/piano-beluga.gif"></img>
      <img className="me-pic" src="/images/avocado.gif"></img>
    </div>
		
  )
}

export default Me;
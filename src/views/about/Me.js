import React from "react"
import "./Me.css"

const Me = () => {
	return (
    <div className="me-container">
      <div className="me">{`
        I'm just trying to find out who I am. And learn things. 
        
        Here are some pictures I like.
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
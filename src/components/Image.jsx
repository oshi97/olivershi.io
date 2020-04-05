import React from 'react'

const Image = props => (
  <img className={props.className || 'image'} src={`https://${window.location.host}/public/images/${props.src}`}></img>
)

export default Image
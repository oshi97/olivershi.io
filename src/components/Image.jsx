import React from 'react'

const Image = props => (
  <img className={props.className ? 'image ' + props.className : 'image'}
    src={`https://${window.location.host}/public/images/${props.src}`}
    style={props.style}/>
)

export default Image
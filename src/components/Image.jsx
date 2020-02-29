import React from 'react'

const Image = props => {
  console.log(window)
  const css = { 
    minWidth: '2em',
    minHeight: '2em',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(https://${window.location.host}/public/images/${props.src})`
  }
  return (
    <div style={css}></div>
  )
}

export default Image
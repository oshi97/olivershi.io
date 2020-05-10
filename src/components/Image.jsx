import React from 'react'

const _context = require.context('../../docs/public/images', true)
const imageContext = _context.keys().reduce((imageContext, key) => {
  imageContext[key] = _context(key).url
  return imageContext
}, {})

const Image = props => {
  const request = `./${props.src}`
  const filepath = imageContext[request].split('./docs/').pop()
  const src = `https://${window.location.host}/${filepath}`
  return (
    <img className={props.className ? 'image ' + props.className : 'image'}
      src={src}
      style={props.style}/>
  )
}

export default Image
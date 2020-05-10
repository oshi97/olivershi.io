import React from 'react'

const _context = require.context('../../docs/public/images', true)
const imageContext = _context.keys().reduce((imageContext, key) => {
  imageContext[key] = _context.resolve(key)
  return imageContext
}, {})

const Image = props => {
  const filepath = imageContext[`./${props.src}`].split('./docs/').pop()
  const src = `https://${window.location.host}/${filepath}`
  return (
    <img className={props.className ? 'image ' + props.className : 'image'}
      src={src}
      style={props.style}/>
  )
}

export default Image
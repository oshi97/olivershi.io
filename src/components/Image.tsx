import { CSSProperties } from 'react'

const _context = require.context('../../public/images/', true)

const imageContext = _context.keys().reduce((imageContext, key) => {
  imageContext[key] = _context(key)
  return imageContext
}, {} as Record<string, string>)

const Image = (props: {
  src: string,
  className?: string,
  style?: CSSProperties
}) => {
  const request = `./${props.src}`

  return (
    <img className={props.className ? 'image ' + props.className : 'image'}
      src={imageContext[request]}
      style={props.style}
      alt={request}
    />
  )
}

export default Image
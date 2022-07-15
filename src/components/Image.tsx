const _context = require.context('../../public/images/', true)

const imageContext = _context.keys().reduce((imageContext, key) => {
  imageContext[key] = _context(key)
  return imageContext
}, {} as Record<string, string>)

console.log(imageContext)

const Image = (props: any) => {
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
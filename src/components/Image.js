import React from 'react'

/**
 * HOC for images so I only have to change image base url once when I feel OCD
 */
const baseImgUrl = '/public/images'

export default class Image extends React.Component {
  render() {
    const className = this.props.className
    let src = this.props.src.trim()
    while (src && src.charAt(0) === '/') {
      src = src.substring(1, src.length)
    }

    if (!src || src === '') {
      throw new Error('Image with invalid src', src)
    }

    return (
			<img className={className} src={baseImgUrl + '/' + src}></img>
    )
  }
}
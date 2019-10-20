import React from 'react'
import './Me.css'
import Image from '../../components/Image'

const Me = () => {
	return (
    <div className='me-container'>
      <div className='me'>{`
        Hi, I'm Oliver! I'm not really sure what to say beyond that. 
        
        Here are some pictures I like I guess.
        `}
		  </div>
      <Image className='me-pic' src='turtle.png'></Image>
      <Image className='me-pic' src='fish.png'></Image>
      <Image className='me-pic' src='piano-beluga.gif'></Image>
      <Image className='me-pic' src='avocado.gif'></Image>
    </div>
		
  )
}

export default Me;
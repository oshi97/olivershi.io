import React from 'react'
import Sheets from './sheets/Sheets'
import Home from './Home'
import Otaku from './otaku/Otaku'
import Blog from './blog/Blog'

export default {
  '/sheets': <Sheets/>,
  '/otaku': <Otaku />,
  '/blog': <Blog />,
  '/': <Home />,
  default: <Home />
}
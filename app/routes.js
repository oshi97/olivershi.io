import Sheets from './sheets'
import Home from './Home'
import Otaku from './otaku'
import Blog from './blog'
import Genshin from './genshin'

export default {
  '/sheets': <Sheets/>,
  '/otaku': <Otaku />,
  '/blog': <Blog />,
  '/genshin': <Genshin />,
  '/': <Home />,
  default: <Home />
}
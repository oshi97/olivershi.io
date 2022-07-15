import Sheets from './sheets/index'
import Home from './Home'
import Otaku from './otaku/index'
import Blog from './blog/index'
import Genshin from './genshin/index'

export default {
  '/sheets': <Sheets/>,
  '/otaku': <Otaku />,
  '/blog': <Blog />,
  '/genshin': <Genshin />,
  '/': <Home />,
  default: <Home />
}
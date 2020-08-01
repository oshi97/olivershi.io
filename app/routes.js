import Sheets from './sheets'
import Home from './Home'
import Otaku from './otaku'
import Blog from './blog'

export default {
  '/sheets': <Sheets/>,
  '/otaku': <Otaku />,
  '/blog': <Blog />,
  '/': <Home />,
  default: <Home />
}
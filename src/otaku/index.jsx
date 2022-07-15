import Switch from '../components/Switch'
import Link from '../components/Link'
import Image from '../components/Image'
import routes from './routes.js'

const Otaku = () => (
  <Switch routes={{ ...routes, default: <Directory/> }} exact={true}></Switch>
)

const Directory = () => (
  <div className='otaku-navbar'>
    <Link className='otaku-item' href='/otaku/konosuba'>
      Konosuba
      <Image className='otaku-item-image' src='japanese/konosuba_ed_2.jpg'/>
    </Link>
    <Link className='otaku-item' href='/otaku/isekai-quartet'>
      Isekai Quartet
      <Image className='otaku-item-image' src='japanese/isekai_quartet_op_2.jpg'/>
    </Link>
    <Link className='otaku-item' href='/otaku/takagi'>
      Takagi
      <Image className='otaku-item-image' src='japanese/takagi_op_2.gif'/>
    </Link>
    <Link className='otaku-item' href='/otaku/okarishimasu'>
      Rent a Girlfriend
      <Image className='otaku-item-image' src='japanese/okarishimasu_op.gif'/>
    </Link>
  </div>
)

export default Otaku

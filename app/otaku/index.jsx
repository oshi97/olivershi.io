import Switch from '../../src/components/Switch'
import Link from '../../src/components/Link'
import Image from '../../src/components/Image'
import routes from './routes.js'

const Otaku = () => (
  <Switch routes={{ ...routes, default: <Directory/>}} exact={true}></Switch>
)

const Directory = () => (
  <div className='otaku-navbar'>
    <Link className='otaku-item' href='/otaku/konosuba'>
      Konosuba
      <Image className='otaku-item-image' src='japanese/konosuba_ed_2'/>
    </Link>
    <Link className='otaku-item' href='/otaku/isekai-quartet'>
      Isekai Quartet
      <Image className='otaku-item-image' src='japanese/isekai_quartet_op_2'/>
    </Link>
    <Link className='otaku-item' href='/otaku/takagi'>
      Takagi
      <Image className='otaku-item-image' src='japanese/takagi_op_2'/>
    </Link>
    <Link className='otaku-item' href='/otaku/okarishimasu'>
      Rent a Girlfriend
      <Image className='otaku-item-image' src='japanese/okarishimasu_op'/>
    </Link>
  </div>
)

export default Otaku

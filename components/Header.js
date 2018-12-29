import Link from 'next/link'
import SideBar from './SideBar.js'

const linkStyle = {
  marginRight: 15
}
// TODO make something that updates all import links automatically when file is moved
// Will probably never finish this myself and someone else will finish it first or 
// Maybe it already exists and I'll just find it
// Honestly, find and replace is a thing huh, it shouldnt be that hard to make if its
// not already a thing which it should be

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
        <div>
        	<SideBar count={this.props.count}/>
            <Link href="/" prefetch>
              <a style={linkStyle}>Home</a>
            </Link>
            <Link href="/about" prefetch>
              <a style={linkStyle}>About</a>
            </Link>
        </div>
      );
  }
}

export default Header

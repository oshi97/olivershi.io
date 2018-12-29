import Link from 'next/link'
import categoryData from '../static/data/categoryData.js'

const linkStyle = {
  marginRight: 15
}

class SideBarLink extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
        <Link as={`/post/${this.props.url}`} href={`/categoryIndex?categoryName=${this.props.url}`} key={this.props.key}>
          <a style={linkStyle}> {this.props.name}</a>
        </Link>
      );
  }
}

// daily life, reflections, programming, creative writing, books
class SideBar extends React.Component {
  constructor(props) {
    super(props)
    var sidebar = []
    for(const i in categoryData) {
      sidebar.push(<SideBarLink name={categoryData[i].name} key={categoryData[i].id} url={categoryData[i].url}/>)
    }
    this.state = {sidebar: sidebar}
  }
  render() {
    return(
        <div>This is the sidebar {this.state.sidebar}</div>
      );
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
        <div>
        	<SideBar count={this.props.count}/>
            <Link href="/">
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

import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

class SideBarLink extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
        <Link href={'/posts/'+this.props.category} key={this.props.uniqueId}>
          <a style={linkStyle}> {this.props.category} </a>
        </Link>
      );
  }
}

// daily life, reflections, programming, creative writing, books
class SideBar extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    var sidebar = [];
    console.log("osdfsdf=" + this.props.count)
    for(let i = 0; i < this.props.count; ++i) {
      sidebar.push(<SideBarLink category="Category" key={i} />);
    }
    return(
        <div>This is the sidebar {sidebar}</div>
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
            <Link href="/about">
              <a style={linkStyle}>About</a>
            </Link>
        </div>
      );
  }
}

export default Header

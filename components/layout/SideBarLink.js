import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

// TODO move these components into separate components, or just organize better 
class SideBarLink extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
        <Link prefetch as={`/blog/${this.props.url}`} href={`/categoryIndex?categoryUrl=${this.props.url}`}>
          <a style={linkStyle}> {this.props.name}</a>
        </Link>
      );
  }
}

export default SideBarLink
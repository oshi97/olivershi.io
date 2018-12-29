import Link from 'next/link'
import categoryData from '../static/data/categoryData.js'

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
        <Link prefetch as={`/post/${this.props.url}`} href={`/categoryIndex?categoryName=${this.props.url}`}>
          <a style={linkStyle}> {this.props.name}</a>
        </Link>
      );
  }
}

export default SideBarLink
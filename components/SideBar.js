import Link from 'next/link'
import SideBarLink from './SideBarLink.js'
import categoryData from '../static/data/categoryData.js'

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

export default SideBar
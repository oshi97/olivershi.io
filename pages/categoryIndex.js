import Layout from '../components/Layout.js'
import Link from 'next/link'

// can't just use raw props.category -> need to have category ID and then lookup in mongodb for consistent results
// it not found return "category not found"
class Index extends React.Component {
  render() {
    console.log('props',this.props)
    return (
      <Layout>
        <h1>List of {this.props.categoryName} Posts</h1>
        <ul>
          <li> 
    	  		<Link href={'/posts/'+this.props.categoryName}>
              {/*TODO load posts from database here, likely want to preload into json*/}
    	    		<a> Click here! </a>
    	    	</Link>
    	    </li>
        </ul>
      </Layout> 
    );
  }
}

Index.getInitialProps = async function(context) {
  console.log('ctx = ', context.query)
  const { categoryName } = context.query
  return { categoryName: categoryName }
}

export default Index
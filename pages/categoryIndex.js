import Layout from '../components/MyLayout.js'
import Link from 'next/link'

// can't just use raw props.category -> need to have category ID and then lookup in mongodb for consistent results
// it not found return "category not found"
const Index = (props) => (
  <Layout>
    <h1>List of {props.category} Posts</h1>
    <ul>
      <li> 
	  		<Link href='/posts/0'>
	    		<a> {props.category} </a>
	    	</Link>
	    </li>
    </ul>
  </Layout>
)

Index.getInitialProps = async function(context) {
  const { category } = 'Daily Life' // get this from mongo by using category id and context.query
  // const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  // const show = await res.json()

  // console.log(`got the show ${show.name}`)

  return { category }
}

export default Index
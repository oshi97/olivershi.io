import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

class Index extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return(
		  <Layout count={this.props.count}>
		    <h1>olivershi.io</h1>
		    <div> my mind online </div>
		    <ul>
		    </ul>
		  </Layout>
		);
	}
}

Index.getInitialProps = async function() {
    const res = await fetch('http://localhost:3000/api/category/all')
    const data = await res.json()

    console.log(`Show data FETCHED. count: ${data}`)
    console.log("GETTING INITIAL PROPS OKAY")
    return {
      count: data.count
      // TODO: find out if we should use redux so we don't have to pass this count prop so far through lol
      // Or just organize in a way where this doesn't happen anymore
    }
  }

export default Index
import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'
class About extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return(
			<div>
				<h1>olivershi.io</h1>
				<div> This is the about page </div>
			</div>
		);
	}
}

// About.getInitialProps = async function() {
		// const res = await fetch('http://localhost:3000/api/category/all')
		// const data = await res.json()

		// console.log(`Show data FETCHED. about page: ${data.categories.length} asdfasdf ${data.categories[0]}`)
		// console.log("GETTING INITIAL PROPS OKAY")
		// return {
		//   count: data.categories.length,
		//   categories: data.categories
		//   // TODO: find out if we should use redux so we don't have to pass this count prop so far through lol
		//   // Or just organize in a way where this doesn't happen anymore
		// }
	// }

export default About
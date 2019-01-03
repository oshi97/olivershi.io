import Layout from '../components/Layout.js'
import Link from 'next/link'

// can't just use raw props.category -> need to have category ID and then lookup in mongodb for consistent results
// it not found return "category not found"
class Index extends React.Component {
	render() {
		return (
			<div>
				<h1>List of {this.props.categoryName} Posts</h1>
				<ul>
					<li> 
						<Link as={'/'+this.props.categoryName+'/0'} href={'/post?param1='+this.props.categoryName}>
							{/*TODO load posts from database here, likely want to preload into json*/}
							<a> Click here! </a>
						</Link>
					</li>
				</ul>
			</div> 
		);
	}
}

Index.getInitialProps = async function(context) {
	// TODO finish this this commit
	const { categoryName } = context.query
	console.log(context)
	console.log(`got the category with name ${categoryName}`)
	console.log(`making request to https://localhost:3000/api/category/${category}`)
	
	const res = await fetch(`https://localhost:3000/api/post/${id}`)
	const post = await res.json()
	
	return { 
		categoryName: categoryName,
		posts: 
	}
}

export default Index
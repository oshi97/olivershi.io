import Layout from '../components/Layout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

// can't just use raw props.category -> need to have category ID and then lookup in mongodb for consistent results
// it not found return "category not found"
class Index extends React.Component {
	constructor(props) {
		super(props)
		var postList = []
		for (const i in props.posts) {
			const post = props.posts[i]
			console.log('AYAYA POST ', post)
			postList.push(
				<li key={post.id}> <Link
					as={`/blog/${props.categoryUrl}/${post.url}`}
					href={`/post?postUrl=${post.url}&categoryUrl=${props.categoryUrl}`}>
					<a> {post.title} </a>
				</Link> </li>)
		}
		this.state = {postList: postList}
	}
	// TODO change to use canonical name instead of categoryurl
	render() {
		return (
			<div>
				<h1>List of {this.props.categoryUrl} Posts</h1>
				<ul>
					{this.state.postList}
				</ul>
			</div> 
		);
	}
}

Index.getInitialProps = async function(context) {
	// TODO finish this this commit
	const { categoryUrl } = context.query
	console.log(`got the category with name ${categoryUrl}`)
	
	const res = await fetch(`http://localhost:3000/api/categories/${categoryUrl}/posts`)
	const posts = await res.json()
	
	return { 
		categoryUrl: categoryUrl,
		posts: posts.posts
	}
}

export default Index
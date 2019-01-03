import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'

class Post extends React.Component { 
	render() {
		return (
			<div>
				<h1>Post Title: {this.props.title}</h1>
				{this.props.text}
			</div>
		);
	}
}

// param1 is postId
Post.getInitialProps = async function(context) {
	// should only have one paramter of show id
	const { postUrl } = context.query
	console.log(`making request to http://localhost:3000/api/posts/url/${postUrl}`)
	
	const res = await fetch(`http://localhost:3000/api/posts/url/${postUrl}`)
	const post = await res.json()
	return { 
		text: post.text,
		title: post.title,
		categoryOID: post.category,
	}
}

export default Post
import Layout from '../components/Layout.js'
class Post extends React.Component { 
	render() {
		return (
			<div>
				<h1>Post Title: {this.props.title} for id {this.props.id}</h1>
				{this.props.text}
			</div>
		);
	}
}

// param1 is postId
Post.getInitialProps = async function(context) {
	// should only have one paramter of show id
	const { id } = context.query
	console.log(context)
	console.log(`got the post with id ${id}`)
	console.log(`making request to https://localhost:3000/api/post/${id}`)
	
	const res = await fetch(`https://localhost:3000/api/post/${id}`)
	const post = await res.json()
	return { 
		text: post.text,
		title: post.title,
		categoryOID: post.category,
		id: post.id,
		body: req.body
	}
}

export default Post
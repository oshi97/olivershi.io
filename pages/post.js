import Layout from '../components/Layout.js'
class Post extends React.Component { 
	render() {
		return (
			<div>
				<h1>Post Title: {this.props.title} for id {this.props.id}</h1>
				{this.props.post}
			</div>
		);
	}
}

Post.getInitialProps = async function(context) {
	const PostData = require('../static/data/'+context.query.postId+'.js')
	return {
		post: PostData.post,
		id: PostData.id,
		title: PostData.title
	}
}

export default Post
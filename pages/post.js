import Layout from '../components/Layout.js'
class Post extends React.Component { 
	render() {
		return (
	    <Layout>
	    	<h1>Post Title: {this.props.title} for id {this.props.id}</h1>
	    	{this.props.post}
	    </Layout>
		);
	}
}

Post.getInitialProps = async function(context) {
	// const PostData = (require('../static/data/'+context.query.postId)+'.js');
	const PostData = (require('../static/data/'+context.query.postId+'.js'))
	// const PostData = require('../static/data/categoryData.js')[0]
	// console.log('tag ', JSON.stringify(PostData))
	return {
		post: PostData.post,
		id: PostData.id,
		title: PostData.title
	}
}

export default Post
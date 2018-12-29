import Layout from '../components/Layout.js'
class Post extends React.Component { 
	render() {
		return (
	    <Layout>
	       <h1>Post Title</h1>
	       {this.props.post}
	       </Layout>
		);
	}
}

Post.getInitialProps = async function(context) {
	console.log(context.query)
	import PostData from '../static/data/'+context.query;
	return {post: PostData}
}

export default Post
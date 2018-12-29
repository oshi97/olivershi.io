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
						<Link as={'/post/'+this.props.categoryName} href={'/categoryIndex?categoryName='+this.props.categoryName}>
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
	const { categoryName } = context.query
	return { categoryName: categoryName }
}

export default Index
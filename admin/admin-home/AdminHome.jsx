import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './AdminHome.css'
import PostPreview from '../../components/PostPreview'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const Default = () => (
	<React.Fragment>
		<ul className='post-preview-list'>
			<li>				
				<PostPreview 
					title='Add a new post' 
					date={new Date(Date.now()).toDateString()} 
					desc='Add a new post' 
					imgUrl='plus.png' 
					link='/admin/newPost' />
			</li>
		</ul>
	</React.Fragment>
)

class NewPost extends React.Component {
	componentDidMount() {
		ClassicEditor
		.create( document.querySelector( '#editor' ) )
		.catch( error => {
				console.error( error );
		} );
	}

	render() {
		return (
			<div>
				<textarea name="content" id="editor"></textarea>
			</div>
		)
	}
}

const AdminHomeRouter = () => (
	<Switch>
		<Route path='/admin/newPost' component={NewPost}/>
		<Route component={Default}/>
	</Switch>
)

const AdminHome = () => (
	<AdminHomeRouter/>
)

export default AdminHome
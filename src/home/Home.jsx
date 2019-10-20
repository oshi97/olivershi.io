import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './Home.css'
import PostPreview from '../components/PostPreview'
import {Editor, EditorState, RichUtils} from 'draft-js';
import axios from 'axios';

const HomeRouter = () => (
	<Switch>
		<Route path='/home/draft' exact component={Test} />
		<Route component={Default}/>
	</Switch>
)

class Test extends React.Component {
  constructor(props) {
    super(props)
	}

	sendPost() {
		axios.post(
			'http://olivershi.io/api/posts',
			{ example: 'data' },
			{ headers: { 'Content-Type': 'application/json' } }
		)
	}
	
  render() {
    return (
			<div>
        <button onClick={this.sendPost.bind(this)}>
					Write jSON!@!
				</button>
			</div>
    );
  }
}

const Default = () => (
	<ul className='post-preview-list'>
		<li>				
			<PostPreview 
				title='title3' 
				date='wheeee a watch' 
				desc='lorem eisdfaasdf epsom salt' 
				imgUrl='piano-beluga.gif' 
				link='draft' />
		</li>
	</ul>
)

const Home = () => (
	<HomeRouter/>
)

export default Home
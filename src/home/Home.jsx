import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import './Home.css'
import PostPreview from '../../components/PostPreview'
import AudioRecorder from '../posts/AudioRecorder'

const Default = () => (
	<ul className='post-preview-list'>
		<li>				
			<PostPreview 
				title='title3' 
				date='wheeee a watch' 
				desc='lorem eisdfaasdf epsom salt' 
				imgUrl='piano-beluga.gif' 
				link='/newPost'/>
		</li>
	</ul>
)


const Home = () => (
	<Switch>
		<Route path='/newPost' component={AudioRecorder}/>
		<Route component={Default}/>
	</Switch>
)

export default Home
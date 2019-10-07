import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './Home.css'
import PostPreview from '../../components/PostPreview'
import ReactAce from './react-ace/ReactAce'


const HomeRouter = () => (
	<Switch>
		<Route path='/home/react-ace' component={ReactAce} />
		<Route path='/home' component={Default}/>
	</Switch>
)

const Default = () => (
	<ul className='post-preview-list'>
		<li>				
			<PostPreview 
				title='title3' 
				date='wheeee a watch' 
				desc='lorem eisdfaasdf epsom salt' 
				imgUrl='piano-beluga.gif' 
				link='react-ace' />
		</li>
	</ul>
)

const Home = () => (
	<HomeRouter/>
)

export default Home
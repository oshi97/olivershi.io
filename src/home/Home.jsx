import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './Home.css'
import PostPreview from '../components/PostPreview'

const Default = () => (
	<ul className='post-preview-list'>
		<li>				
			<PostPreview 
				title='title3' 
				date='wheeee a watch' 
				desc='lorem eisdfaasdf epsom salt' 
				imgUrl='piano-beluga.gif' 
				link='home/draft' />
		</li>
	</ul>
)



const HomeRouter = () => (
	<Switch>
		<Route component={Default}/>
	</Switch>
)

const Home = () => (
	<HomeRouter/>
)

export default Home
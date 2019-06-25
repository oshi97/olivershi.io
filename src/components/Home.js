import React from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import "../App.css"
import PostPreview from './PostPreview.js'

const Home = () => {
	return (
		<ul className="post-preview-list">
			<li>
				<PostPreview 
					title="title1" 
					date="novemeber whenever" 
					desc="post numbrr 1" 
					imgUrl="1.jpg" 
					date="Novemeber whenever" 
					link="1"/>
			</li>
			<li>				
				<PostPreview 
					title="title2" 
					date="fun time" 
					desc="Longggggg longggg mannnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn long long long long long long  long long long  long long long  long long long long long long long long long  long long long  long long long  long long lonlong long long  long long long  long long lo " 
					imgUrl="2.jpg" 
					link="2" />
			</li>
			<li>				
				<PostPreview 
					title="title3" 
					date="wheeee a watch" 
					desc="lorem eisdfaasdf epsom salt" 
					imgUrl="piano-beluga.gif" 
					link="2" />
			</li>
			<li>				
				<PostPreview 
					title="title4" 
					date="some time" 
					desc="i am tree. lorem. ipsum." 
					imgUrl="4.jpeg" 
					link="2" />
			</li>
		</ul>
	)
}

export default Home;
import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Image from './Image'
import './PostPreview.css'

// image url, title, link, date, description
const PostPreview = ({ link, desc, date, imgUrl, title }) => {
	link = link ? link : '/'
	console.log(link)
	return (
		<div className='post-preview'>
			<Link to={link} className='post-preview-img-container'> 
				<div className='post-preview-img-background'>
					<Image className='post-preview-img' src={imgUrl}></Image>
					<div className='post-preview-img-date'> {date} </div>
					<div className='post-preview-img-text'> Read More </div>
				</div>
			</Link>
			<div className='desc-container'>
				<Link to={link} className='preview-title-link'>
					<div className='preview-title'> {title} </div>
				</Link>
				<Link to={link} className='preview-desc-link'>
					<div className='preview-desc'> {desc} </div>
				</Link>
			</div>
		</div>
	)
}

export default PostPreview
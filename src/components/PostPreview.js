import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import "../App.css"

const baseImgUrl = "/images"
// image url, title, link, date, description
const PostPreview = (props) => {
	return (
		<div className="post-preview">
			<Link to={props.link ? props.link : '/'} className="post-preview-img-container"> 
				<div className="post-preview-img-background">
					<img className="post-preview-img" src={baseImgUrl + "/" + props.imgUrl}></img>
					<div className="post-preview-img-date"> {props.date} </div>
					<div className="post-preview-img-text"> Read More </div>
				</div>
			</Link>
			<div className="desc-container">
				<Link to={props.link ? props.link : '/'} className="preview-title-link">
					<div className="preview-title"> {props.title} </div>
				</Link>
				<Link to={props.link ? props.link : '/'} className="preview-desc-link">
					<div className="preview-desc"> {props.desc} </div>
				</Link>
			</div>
		</div>
	)
}

export default PostPreview;
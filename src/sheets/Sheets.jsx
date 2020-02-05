import React from 'react'
import { fetchSheets } from '../tools/ajax'
import './Sheets.css'

/**
 * 
 * @param {string || Object} dirEntry 
 * @param {string} root 
 */
function routeDirEntry(dirEntry, rootDir) {
	if (typeof dirEntry === 'string') {
		console.log(dirEntry, rootDir)
		return <File
			name={dirEntry}
			full_path={rootDir + dirEntry}
			key={rootDir + dirEntry}
		/>;
	} else if (typeof dirEntry === 'object') {
		return (<Directory {...dirEntry} key={dirEntry.full_path} />)
	}
}

const Directory = (props) => {
	const { contents, name, full_path } = props
	return (
		<div className='dir'>
			{name || './'}
			<div className='dir-content'>
				{contents && contents.map(dirEntry => routeDirEntry(dirEntry, full_path))}
			</div>
		</div>
	);
}

const File = ({ name, full_path }) => (
	<div className='file'>
		<a href={full_path}>{name}</a>
	</div>
)

export default class Sheets extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			sheetsJson: {}
		}
	}

	componentDidMount() {
		if (Object.entries(this.state.sheetsJson).length === 0) {
			fetchSheets().then(res => {
				this.setState({ 
					sheetsJson: JSON.parse(res.response)
				})
			}).catch(err => {
				console.error(err)
			})
		}
	}

	render() {
		return (
			<Directory {...this.state.sheetsJson} />
		);
	}
}
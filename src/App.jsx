import React from 'react'
import ReactDOM from "react-dom"
import { sheetsJson } from './tools/ajax'

const sheetsRoot = 'public/sheets/'

/**
 * 
 * @param {string || Object} dirEntry 
 * @param {string} root 
 */
function routeDirEntry(dirEntry, rootDir) {
	if (typeof dirEntry === 'string') {
		console.log(dirEntry, rootDir);
		return <File
			name={dirEntry}
			full_path={sheetsRoot + rootDir + dirEntry}
			key={rootDir + dirEntry}
		/>;
	} else if (typeof dirEntry === 'object')  {
		return (<Directory {...dirEntry} key={dirEntry.full_path}/>)
	}
}

const Directory = (props) => {
	const { contents, name, full_path } = props
	console.log(props)
	return (
		<div>
			{name || './'}
			{contents && contents.map(dirEntry => routeDirEntry(dirEntry, full_path))}
		</div>
	);
}

const File = ({ name, full_path }) => (
	<div>
		<a href={full_path}>{name}</a>
	</div>
)

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			sheetsJson: {}
		}
		this.sheetsJson = {}
	}

	componentDidMount() {
		sheetsJson('public/sheets/dir.json').then(res => {
			const sheetsJson = JSON.parse(res.response)
			this.setState({ sheetsJson })
		}).catch(err => {
			console.error(err)
		})
	}

	render() {
		console.log('start', this.state.sheetsJson)
		return (
			<div className='app'>
				<Directory {...this.state.sheetsJson}/>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById("root"))
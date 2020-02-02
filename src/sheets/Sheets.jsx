import React from 'react'
import { sheetsRoot } from '../tools/consts'
import { sheetsJson } from '../tools/ajax'

/**
 * 
 * @param {string || Object} dirEntry 
 * @param {string} root 
 */
function routeDirEntry(dirEntry, rootDir) {
	if (typeof dirEntry === 'string') {
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
			sheetsJson: props.sheetsJson || {}
		}
	}

	componentDidMount() {
        if (!this.state.sheetsJson) {
            sheetsJson().then(res => {
                const sheetsJson = JSON.parse(res.response)
                this.setState({ sheetsJson })
            }).catch(err => {
                console.error(err)
            })
        }
    }

    render() {
        return (
            <Directory {...this.state.sheetsJson}/>
        );
    }
}
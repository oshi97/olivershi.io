import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import { Link, Switch } from './router/Router'
import { sheetsJson } from './tools/ajax'
import Sheets from './sheets/Sheets'
import Home from './home/Home'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			sheetsJson: {}
		}
	}
	componentDidMount() {
		sheetsJson().then(res => {
			const sheetsJson = JSON.parse(res.response)
			this.setState({ sheetsJson })
		}).catch(err => {
			console.error(err)
		})
	}

	render() {
		const routes = {
			'/sheets': <Sheets sheetsJson={this.state.sheetsJson}/>,
			'/': <Home/>
		};
		return (
			<div className='app'>
				Yahallo!!~!!!
				<Link className='testlink' href='/'> Home </Link>
				<Link className='testlink' href='/sheets'> Sheets </Link>
				<Switch routes={routes}></Switch>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById("root"))
import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import { Link, Switch } from './router/Router'
import Sheets from './sheets/Sheets'
import Home from './home/Home'

class App extends React.Component {
	render() {
		const routes = {
			'/sheets': <Sheets/>,
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
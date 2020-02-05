import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import { Switch } from './router/Router'
import Sheets from './sheets/Sheets'
import Home from './home/Home'
import Navbar from './navbar/Navbar'
import Otaku from './otaku/Otaku'

const App = () => {
	const routes = {
		'/sheets': <Sheets/>,
		'/otaku': <Otaku />,
		'/': <Home />
	};
	return (
		<div className='app'>
			<Navbar />
			<Switch routes={routes}></Switch>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById("root"))
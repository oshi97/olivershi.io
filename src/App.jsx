import React from 'react'
import ReactDOM from 'react-dom'
import 'core-js/features/string/starts-with'
import 'core-js/features/object/entries'
import 'core-js/features/promise'
import 'custom-event-polyfill'
import Switch from './router/Switch'
import Sheets from './sheets/Sheets'
import Home from './home/Home'
import Navbar from './navbar/Navbar'
import Otaku from './otaku/Otaku'

const App = () => {
	const routes = {
		'/sheets': <Sheets/>,
		'/otaku': <Otaku />,
		'/': <Home />,
		default: <Home />
	};
	return (
		<div className='app'>
			<Navbar />
			<Switch routes={routes} defaultURL='/'></Switch>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById("root"))
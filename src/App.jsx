import React from 'react'
import ReactDOM from 'react-dom'
import 'core-js/features/string/starts-with'
import 'core-js/features/object/entries'
import 'core-js/features/promise'
import 'custom-event-polyfill'
import Switch from './components/Switch'
import Sheets from './Sheets'
import Home from './Home'
import Navbar from './Navbar'
import Otaku from './Otaku'

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
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
		<React.Fragment>
			<Navbar />
			<div className='app'>
				<Switch routes={routes} defaultURL='/'></Switch>
			</div>
		</React.Fragment>
	)
}

ReactDOM.render(<App />, document.getElementById("root"))
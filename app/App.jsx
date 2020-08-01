import React from 'react'
import ReactDOM from 'react-dom'
import 'core-js/features/string/starts-with'
import 'core-js/features/object/entries'
import 'core-js/features/promise'
import 'custom-event-polyfill'
import Switch from '../src/components/Switch'
import Sheets from './Sheets'
import Home from './Home'
import Navbar from './Navbar'
import Otaku from './Otaku'
import Blog from './Blog'
import Breadcrumbs from '../src/components/Breadcrumbs'

class App extends React.Component {
  render () {
    const routes = {
      '/sheets': <Sheets/>,
      '/otaku': <Otaku />,
      '/blog': <Blog />,
      '/': <Home />,
      default: <Home />
    }
    return (
      <React.Fragment>
        <Navbar />
        <Breadcrumbs />
        <div className='app'>
          <Switch routes={routes} defaultURL='/'></Switch>
        </div>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
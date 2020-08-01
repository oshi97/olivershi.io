import React from 'react'
import ReactDOM from 'react-dom'
import 'core-js/features/string/starts-with'
import 'core-js/features/object/entries'
import 'core-js/features/promise'
import 'custom-event-polyfill'
import Switch from '../src/components/Switch'
import Navbar from './Navbar'
import Breadcrumbs from '../src/components/Breadcrumbs'
import routes from './routes'

const App = () => (
  <React.Fragment>
    <Navbar />
    <Breadcrumbs />
    <div className='app'>
      <Switch routes={routes} defaultURL='/'></Switch>
    </div>
  </React.Fragment>
)

ReactDOM.render(<App />, document.getElementById('root'))
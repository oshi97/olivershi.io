import 'core-js/features/string/starts-with'
import 'core-js/features/object/entries'
import 'core-js/features/promise'
import 'custom-event-polyfill'

import ReactDOM from 'react-dom'

import Switch from 'Components/Switch'
import Navbar from './Navbar'
import Breadcrumbs from 'Components/Breadcrumbs'
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
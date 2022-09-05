import Switch from './components/Switch'
import Navbar from './Navbar'
import Breadcrumbs from './components/Breadcrumbs'
import routes from './routes'

const App = () => (
  <>
    <Navbar />
    <Breadcrumbs />
    <div className='app'>
      <Switch routes={routes} defaultURL='/'></Switch>
    </div>
  </>
)
export default App

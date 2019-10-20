import React from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import axios from 'axios'


class Test extends React.Component {
  constructor(props) {
    super(props)
	}

	sendPost() {
		axios.post(
			'https://olivershi.io/api/posts',
			{ example: 'data' },
			{ headers: { 'Content-Type': 'application/json' } }
		)
	}
	
  render() {
    return (
			<div>
        <button onClick={this.sendPost.bind(this)}>
					Write jSON!@!
				</button>
			</div>
    );
  }
}

const App = () => (
	<Router>
		<div className='container-grid'>
			<Switch>
				<Route path='/admin' component={Test}/>
				<Redirect to='/admin'/>
			</Switch>
		</div>
	</Router>
)

ReactDOM.render(<App />, document.getElementById("root"));
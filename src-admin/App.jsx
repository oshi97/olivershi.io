import React from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import axios from 'axios'

class Test extends React.Component {
  constructor(props) {
    super(props)
	}

	sendPost() {
		const baseUrl = process.env.NODE_ENV === 'production' ? 'https://olivershi.io' : 'http://localhost:3000'
		axios.post(
			baseUrl + '/api/posts',
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
				{process.env.NODE_ENV}
			</div>
    );
  }
}

const App = () => (
	<Router>
		<Route path='/admin' exact component={Test}/>
	</Router>
)

ReactDOM.render(<App />, document.getElementById("root"));
import React from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import axios from 'axios'
import Admin from './Admin'
import LoginForm from './LoginForm'

import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

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

const config = {
  issuer: 'https://dev-399526.okta.com/oauth2/default',
  redirectUri: window.location.origin + '/admin/implicit/callback',
  clientId: '0oa1mkc294tzA6aOS357',
  pkce: true
}

const App = () => (
	<Router>
		<Security {...config}>
			<Route path='/admin' exact component={LoginForm}/>
			<Route path='/admin/okta' exact={true} component={Admin}/>
			{/* <Route path='/admin/implicit/callback' component={ImplicitCallback}/> */}
			<SecureRoute path='/admin' exact={true} component={Test}/>
		</Security>
	</Router>
)

ReactDOM.render(<App />, document.getElementById("root"));
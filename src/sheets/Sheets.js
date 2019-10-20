import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './Sheets.css'

const Sheets = () => (
	<Switch>
		<Route path='/sheets' exact component={Default}/>
	</Switch>
)

const Default = () => (
	<div>
    Sheets will go here
  </div>
)


export default Sheets
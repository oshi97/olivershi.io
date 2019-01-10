import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar () {
  const languages = [{
    name: 'Home',
    key: 0,
    param: ''
  }, {
    name: 'TwoJS',
    key: 1,
    param: 'two',
  }, {
    name: 'Canvas 2D',
    key: 2,
    param: 'canvas',
  }]

  return (
    <ul>
      {languages.map(({ name, key, param }) => (
        <li key={key}>
          <NavLink activeStyle={{fontWeight: 'bold', color: 'lightblue'}} exact to={`/${param}`}>
            {name} {key} {param}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'

require("./main.css")

import Header from './header.jsx'
import Content from './content.jsx'

const App = () => (
  <div className="container">
    <h1>My Components App</h1>
    <Header />
    <Content />
  </div>
)

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
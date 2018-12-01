import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css'
import App from './ui/App'


ReactDOM.render(
  <Router>
    {/* <Route component={App} /> */}
    <App />
  </Router>,
  document.getElementById('root')
)

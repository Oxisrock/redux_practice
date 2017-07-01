import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
// pages para spa
import Home from './pages/Home'
import Contact from './pages/Contact'
import Location from './pages/Location'
const app = document.getElementById('root')
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App} >
      <IndexRoute component={Home} />
      <Route path='Contact' name='Contact' component={Contact} ></Route>
      <Route path='Location' name='Location' component={Location} ></Route>
    </Route>
  </Router>
, app)
registerServiceWorker()

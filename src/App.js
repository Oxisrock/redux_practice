import React, { Component } from 'react'
import Layout from './pages/Layout'
import './App.css'
class App extends Component {
  render () {
    const {location} = this.props
    return (
      <div className='App-intro'>
        <Layout location={location} />
          {this.props.children}
      </div>
    )
  }
}

export default App

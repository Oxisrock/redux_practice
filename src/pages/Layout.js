import React, { Component } from 'react'

import Footer from '../components/layout/Footer'

import Nav from '../components/layout/Nav'
class Layout extends Component {
  render () {
    const { location } = this.props
    const containerStyle = {
      marginTop: '60px'
    }
    return (
      <div>
        <Nav location={location} />
        <div className='container' style={containerStyle}>
          <div className='row'>
            <div className='col-lg-12'>
              <h1 className='text-center'>Friender.com</h1>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Layout

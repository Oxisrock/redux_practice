import React, { Component } from 'react'
import { connect } from 'react-redux'
const store = (store) => {
  return {
    user: store.user
  }
}
class Location extends Component {
  constructor () {
    super()
  }
  render () {
    return (
      <div className=' container jumbotron'>
        <h2 className='text-center text-shadow '> Users List </h2>
        <ul>
          <li>
            this.props.user
          </li>
        </ul>
      </div>
    )
  }
}

export default connect(store, Location)

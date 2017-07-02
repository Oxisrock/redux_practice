import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions/userActions'
class Location extends Component {
  componentWillMount () {
    this.props.dispatch(fetchUser())
  }

  mappedUsers () {
    return this.props.user.map(user => {
      return (
        <li>{user.name}</li>
      )
    })
  }
  render () {
    console.log(this.props.user)
    return (
      <div className=' container jumbotron'>
        <h2 className='text-center text-shadow '> Users List </h2>
        <ul>
          {this.mappedUsers()}
        </ul>
      </div>
    )
  }
}
export default connect((store) => {
  return {
    user: store.user.user,
    userFecthed: store.user.fetched
  }
})(Location)

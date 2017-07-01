import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions/userActions'
class Location extends Component {
  componentWillMount () {
    this.props.dispatch(fetchUser())
  }
  render () {
    const { users } = this.props.user.users
    console.log(users)
    const mappedUsers = users.map(users => <li>{users.name}, {users.username}, {users.age} </li>)
    return (
      <div className=' container jumbotron'>
        <h2 className='text-center text-shadow '> Users List </h2>
        <ul>
          {mappedUsers}
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

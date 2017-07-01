import React, { Component } from 'react'
import { connect } from 'react-redux'
@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets.tweets
  }
})
class Location extends Component {
  render () {
    console.log(this.props)
    return (
      <div className=' container jumbotron'>
        <h2 className='text-center text-shadow '> Users List </h2>
        <ul>
          <li>

          </li>
        </ul>
      </div>
    )
  }
}
export default Location

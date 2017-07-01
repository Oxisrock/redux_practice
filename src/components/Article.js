import React, { Component } from 'react'

class Article extends Component {
  render () {
    const { title } = this.props

    return (
      <div className='col-md-4'>
        <h2>{title}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a className='btn btn-info' href='#'>More Info </a>
      </div>
    )
  }
}

export default Article

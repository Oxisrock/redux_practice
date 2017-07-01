import React, { Component } from 'react'

class FormLogin extends Component {
  render () {
    return (
      <div className='row'>
        <form className=''>
          <div className='form-group'>
            <label>Username</label>
            <input className='form-control' type='text' placeholder='Username' />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input className='form-control' type='password' placeholder='Password' />
          </div>
          <div className='row'>
            <div className='col-xs-12 col-sm-6'>
              <input type='submit' value='Login' className='btn btn-info' />
            </div>
            <div className='col-xs-12 col-sm-6 text-right'>
              <a className='' href='#'>Signup ?</a>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default FormLogin

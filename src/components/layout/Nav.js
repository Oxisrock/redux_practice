import React, {Component} from 'react'
import { IndexLink, Link } from 'react-router'
import FormLogin from '../FormLogin'

class Nav extends Component {
  constructor () {
    super()
    this.state = {
      collapsed: true
    }
  }
  toggleCollapse () {
    const collapsed = !this.state.collapsed
    this.setState({collapsed})
  }
  render () {
    const { location } = this.props
    const { collapsed } = this.state
    const homeClass = location.pathname === '/' ? 'active' : ''
    const contactClass = location.pathname.match(/^\/Contact/) ? 'active' : ''
    const locationClass = location.pathname.match(/^\/Location/) ? 'active' : ''
    const navClass = collapsed ? 'collapse' : ''
    return (
      <nav className='navbar navbar-inverse navbar-fixed-top' role='navigation'>
        <div className='container'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle' onClick={this.toggleCollapse.bind(this)}>
              <span className='sr-only'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <a className='navbar-brand hvr-grow'>FRIENDER</a>
          </div>
          <div className={'navbar-collapse ' + navClass} id='bs-example-navbar-collapse-1'>
            <ul className='nav navbar-nav'>
              <li className={'hvr-sweep-to-left hvr-push ' + homeClass}>
                <IndexLink to='/' onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
              </li>
              <li className={'hvr-sweep-to-left hvr-push ' + contactClass}>
                <Link to='Contact' onClick={this.toggleCollapse.bind(this)}>Contact</Link>
              </li>
              <li className={'hvr-sweep-to-left hvr-push ' + locationClass}>
                <Link to='Location' onClick={this.toggleCollapse.bind(this)}>Location</Link>
              </li>
              <div className='nav navbar-nav navbar'>
                <li className='dropdown'>
                  <a className='dropdown-toggle hvr-sweep-to-bottom' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>
                    <span className='glyphicon glyphicon-user' aria-hidden='true' />
                    <span className='caret' />
                  </a>
                  <ul className='dropdown-menu'>
                    <li>
                      <a ><FormLogin /></a>
                    </li>
                  </ul>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
export default Nav

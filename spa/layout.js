import React from 'react'
import NavHelper from './components/nav-helper'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandMixin],

  displayName: 'Layout',

  render () {

    const {me} = this.props;

    return (
      <NavHelper>
        <nav className='top-nav top-nav-light cf' role='navigation'>
          <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
          <label htmlFor='menu-toggle'>Menu</label>
          <ul className='list-unstyled list-inline cf'>
            <li><a href='/'>RAMEN<img className="emoji" title=":ramen:" alt=":ramen:" src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f35c.png" height="20" width="20" align="absmiddle" /></a></li>
            <li className='has-dropdown'>
              <a className='active'>Beers</a>
              <div className='icon-arrow-down'></div>
              <ul className='list-unstyled dropdown cf'>
                <li><a href='/beers'>List</a></li>
                <li><a href='/beers/create'>Create</a></li>
              </ul>
            </li>
            <li className='pull-right'>{me.username} <a href='/logout'>Logout</a></li>
          </ul>
        </nav>
        <div className='container'>
          { this.props.children }
        </div>
      </NavHelper>
    )
  }
})

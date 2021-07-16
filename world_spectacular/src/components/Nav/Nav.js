import './Nav.css';
import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthenticationButton from '../AuthenticationButton/AuthenticationButton';

const Nav = (props) => {

  const [menuOpen, setMenuOpen] = useState(false)
  const [menuBtn, setMenuBtn] = useState('menu-btn')
  const [navBar, setNavBar] = useState('hide')

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
    if (!menuOpen) {
      setMenuBtn('menu-btn')
      setNavBar('hide')
    } else {
      setMenuBtn('menu-btn open')
      setNavBar('display')
    }

  }

  return (
    <nav>
      <ul id={navBar}>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/world'}>World View</Link></li>
          <li><Link to={'/world/photos'}>Photos</Link></li>
          <li><Link to={`/profile`}>Profile</Link></li>
          <li><AuthenticationButton /></li>
      </ul>
      <div id='hmbgr'>
        <div className={menuBtn} onClick={handleMenuClick}>
          <div className='menu-btn_burger'>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
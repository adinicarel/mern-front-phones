import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo-Adrian.png';
import './header.css'

const Header = () => {
  return (
    <header className='header'>
      <nav className='main_nav'>
        <li><NavLink to="/"><img src={logo} alt='logo' height='60px'/></NavLink></li>
        <li><NavLink className="add_link" to="/add">ADD ITEM</NavLink></li>
      </nav>
    </header>
  )
}

export default Header
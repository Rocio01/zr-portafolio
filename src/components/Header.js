import React from 'react'
import logo from '../images/eyeglasses-g08fdd365f_640.png'

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt='logo'/>
      </div>
      <button className="nav-toggle" aria-label='toggle navigation'>
        <span className='hamburger'></span>
      </button>
    <nav>
      <ul className='nav-list'>
        <li>Home</li>
        <li>About me</li>
        <li>My work</li>
      </ul>
    </nav>
    </header>
  )
}

export default Header

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
      <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
      <li className="nav-item"><a href="#services" className="nav-link">My Services</a></li>
      <li className="nav-item"><a href="#about" className="nav-link">About me</a></li>
      <li className="nav-item"><a href="work" className="nav-link">My Work</a></li>
      </ul>
    </nav>
    </header>
  )
}

export default Header

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
      <li class="nav-item"><a href="#home" class="nav-link">Home</a></li>
      <li class="nav-item"><a href="#services" class="nav-link">My Services</a></li>
      <li class="nav-item"><a href="#about" class="nav-link">About me</a></li>
      <li class="nav-item"><a href="work" class="nav-link">My Work</a></li>
      </ul>
    </nav>
    </header>
  )
}

export default Header

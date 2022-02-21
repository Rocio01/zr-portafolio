import React from 'react'
import logo from '../images/eyeglasses-g08fdd365f_640.png'
import '../header.css'


const Header = () => {
  return (
    <header >
      <div className="logo">
        <img src={logo} alt='logo'/>
      </div>
      <button className="nav-toggle" aria-label='toggle navigation' onClick={() => {document.body.classList.toggle('nav-open')}}>
        <span className='hamburger'></span>
      </button>
    <nav className='nav'>
      <ul className='nav-list'>
      <li className="nav-item"><a href="#home" className="nav-link" onClick={()=> { document.body.classList.remove('nav-open')}}>Home</a></li>
      <li className="nav-item"><a href="#services" className="nav-link" onClick={()=> { document.body.classList.remove('nav-open')}}>My Services</a></li>
      <li className="nav-item"><a href="#about" className="nav-link"onClick={()=> { document.body.classList.remove('nav-open')}}>About me</a></li>
      <li className="nav-item"><a href="#work" className="nav-link"onClick={()=> { document.body.classList.remove('nav-open')}}>My Work</a></li>
      </ul>
    </nav>
    </header>
  )
  
}

export default Header

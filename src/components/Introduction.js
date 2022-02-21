import React from 'react'
import keyboard from '../images/keyboard.jpg'
const Introduction = () => {
  return (
    <section className='intro' id='home'>
      <h1 className='section-title section-title-intro'>
       Hello there, I'm <br /> <strong> Zulma Rocio </strong>      
      </h1>
      <p className='section-subtitle section-subtitle-intro'>
        I'm Software developer <br />       
        I would love to help you build your product, <br />    
        feature, website, feel free to contact me.        
      </p>
      <img src={keyboard} alt='keyboard' className='intro-img' />
      <a href="#footer" className="btn">Contact</a>
    </section>
  )
}

export default Introduction

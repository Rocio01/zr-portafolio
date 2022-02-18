import React from 'react'
import Computer from '../images/glasses-computer.jpg'
const About = () => {
  return (
    <section class="about-me" id="about">
    <h2 class="section-title section-title-about">Who I am</h2>
    <p class="section-subtitle section-subtitle-about"></p>
    
    <div class="about-me-body">
        <p></p>
        <p></p>
    </div>
    
    <img src={Computer} alt="Jane leaning against a bus" />
 </section>
  )
}

export default About
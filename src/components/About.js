import React from 'react'
import Computer from '../images/glasses-computer.jpg'
const About = () => {
  return (
    <section className="about-me" id="about">
    <h2 className="section-title section-title-about">Who I am</h2>
    <p className="section-subtitle section-subtitle-about">lorem ipsum</p>
    
    <div className="about-me-body">
        <p></p>
        <p></p>
    </div>
    
    <img src={Computer} alt="Jane leaning against a bus" />
 </section>
  )
}

export default About
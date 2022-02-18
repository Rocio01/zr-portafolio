import React from 'react'
import Computer from '../images/tag.PNG'
const About = () => {
  return (
    <section className="about-me" id="about">
    <h2 className="section-title section-title-about">Who I am</h2>
    <p className="section-subtitle section-subtitle-about">I am a Full Stack software developer</p>
    
    <div className="about-me-body">
        <p className='p-about-body'> 
          With a passion for coding, I like to be challenged with 
          projects that require me to work outside of my comfort and knowledge.
          Learning new languages and development techniques is very important to me,
          some of the technologies I enjoy working with include: JavaScript, Ruby, 
          Ruby on Rails, React, Redux, Bootstrap, HTML5, CSS3. 
        </p>
      
    </div>
    
    <img src={Computer} alt="Jane leaning against a bus" className='about-me-img'/>
 </section>
  )
}

export default About
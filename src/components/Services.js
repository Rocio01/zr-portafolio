import React from 'react'

const Services = () => {
  return (
    <section className="my-services" id="services">
            <h2 className="section-title section-title-services">My services and skills</h2>
            <div className="services">
                <div className="service">
                    <h3>Development</h3>
                    <p>Front-End: JavaScript, React, Redux, HTML5, CSS3, Bootstrap. <br />
                      Back-End: Ruby, Rails, MySQL. <br />
                      Tools & Methods: Git, GitHub, Heroku, Netlify, Mobile/Responsive Development, RSpec, TDD, Chrome Dev Tools. <br />
                      Professional: Remote Pair-Programming, Teamwork.
                      </p>
                </div> 
            <div className='services-button'>
            <a href="#work" className="btn">My Work</a>
            </div>
            </div>
    </section>
  )
}

export default Services
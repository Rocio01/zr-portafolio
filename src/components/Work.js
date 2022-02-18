import React from 'react'
import ReactCapstone from '../images/react-capstone.PNG'
import RailsCapstone from '../images/rails-time-trac.PNG'
import JsProject from '../images/js-project.PNG'
import Copito from '../images/copito-bot.PNG'
const Work = () => {
  return (
    <section className="my-work" id="work">
    <h2 className="section-ktitle">My work</h2>
    <p className="section-subtitle"></p>
    
    <div className="portfolio">
        <a href="#" className="portfolio-item">
            <img src={ReactCapstone} alt="" className="portfolio-img" />
        </a>
        <a href="#" className="portfolio-item">
            <img src={RailsCapstone} alt="" className="portfolio-img" />
        </a>
        <a href="#" className="portfolio-item">
            <img src={JsProject} alt="" className="portfolio-img" />
        </a>
        <a href="#" className="portfolio-item">
            <img src={Copito} alt="" className="portfolio-img" />
        </a>
        
        
    </div>
</section>
  )
}

export default Work 
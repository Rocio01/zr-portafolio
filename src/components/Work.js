import React from 'react'
import ReactCapstone from '../images/react-capstone.PNG'
import RailsCapstone from '../images/rails-time-trac.PNG'
import JsProject from '../images/js-project.PNG'
import Copito from '../images/copito-bot.PNG'
import { useSelector } from 'react-redux';
const Work = () => {

    const worksState = useSelector((state) => state.worksReducer.works)
    console.log(worksState)

    
  return (
    <section className="my-work" id="work">
    <h2 className="section-title section-title-work">My work</h2>
    <p className="section-subtitle section-subtitle-work">Some examples of my work</p>
    
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
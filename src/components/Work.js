import React from 'react'
import ReactCapstone from '../images/react-capstone.PNG'
import RailsCapstone from '../images/rails-time-trac.PNG'
import JsProject from '../images/js-project.PNG'
import Copito from '../images/copito-bot.PNG'
const Work = () => {
  return (
    <section class="my-work" id="work">
    <h2 class="section-ktitle">My work</h2>
    <p class="section-subtitle"></p>
    
    <div class="portfolio">
        <a href="#" class="portfolio-item">
            <img src={ReactCapstone} alt="" class="portfolio-img" />
        </a>
        <a href="#" class="portfolio-item">
            <img src={RailsCapstone} alt="" class="portfolio-img" />
        </a>
        <a href="#" class="portfolio-item">
            <img src={JsProject} alt="" class="portfolio-img" />
        </a>
        <a href="#" class="portfolio-item">
            <img src={Copito} alt="" class="portfolio-img" />
        </a>
        
        
    </div>
</section>
  )
}

export default Work 
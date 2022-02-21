import React from 'react'
import {Link} from 'react-router-dom'
import ReactCapstone from '../images/react-capstone.PNG'
import RailsCapstone from '../images/rails-time-trac.PNG'
import JsProject from '../images/js-project.PNG'
import Copito from '../images/copito-bot.PNG'
import { useSelector } from 'react-redux';
const Work = () => {

    const worksState = useSelector((state) => state.worksReducer.works)
    const pokemon = ReactCapstone;
    const rails = RailsCapstone;
    const restaurant = JsProject;
    const copito = Copito;

  return (
    <section className="my-work" id="work">
    <h2 className="section-title section-title-work">My work</h2>
    <p className="section-subtitle section-subtitle-work">Some examples of my work</p>
    
    <div className="portfolio">
        {worksState.map((work) => (
           
        <Link to={`/details/${work.imageName}`} className="portfolio-item" key={work.id}>
            <img src={eval(work.imageName)} alt="" className="portfolio-img" key={work.id}/>
        </Link>
            
        ))}        
        
    </div>
</section>
  )
}

export default Work 
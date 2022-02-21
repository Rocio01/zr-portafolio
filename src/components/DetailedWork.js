import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import glasses from '../images/eyeglasses-g08fdd365f_640.png'
import ReactCapstone from '../images/react-capstone.PNG'
import RailsCapstone from '../images/rails-time-trac.PNG'
import JsProject from '../images/js-project.PNG'
import Copito from '../images/copito-bot.PNG'
import '../detailed.css'
import { FaGithub} from "react-icons/fa"

const DetailedWork = () => {
  const worksState = useSelector((state) => state.worksReducer.works)
  const pokemon = ReactCapstone;
  const rails = RailsCapstone;
  const restaurant = JsProject;
  const copito = Copito;
  const {imageName} = useParams();

  const filteredWork = worksState.filter((work) => work.imageName === imageName);
 
  return (
    <>

    { filteredWork.map((work) => (
      <div key={work.id}>
      <section className="intro intro-detailed" key={work.id}>
         <h1 className="section-title section-title-intro">
             <strong>{work.name}</strong>
        </h1>
            <p className="section-subtitle section-subtitle-intro">Description</p>
            <img src={glasses} alt="glasses" className="intro-img" />
      </section>
        
      
        <div className="portfolio-item-individual" >
            <p>{work.description}</p>
            <img src={eval(work.imageName)} alt="imagen" />
            <p>Built with : {work.technologies}</p>            
            <a className="btn" style={{ textAlign: "center", marginRight: "1em"}} href={work.github}><FaGithub  style={{ fontSize: 20}}/> </a>
            <a href={work.demo} style={{ textAlign: "center", marginBottom: "2em"}} className="btn">live demo</a><br/>
        </div>
        </div>
        ))
}
    </>
  )
}

export default DetailedWork
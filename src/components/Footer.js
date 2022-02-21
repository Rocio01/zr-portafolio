import React from 'react'
 import { FaGithub, FaTwitter, FaLinkedin} from "react-icons/fa";
const Footer = () => {
  return (
    <footer id='footer'>
    <a href="mailto:zrmartinezg@gmail.com" className="footer-link">zrmartinezg@gmail.com</a>
    <ul className="social-list">
        <li className="social-list-item"><a className="social-list-link" href="https://github.com/Rocio01"><FaGithub /* style={{ fontSize: 100, color: "blue", marginRight: 30 }}*/ /> </a></li> 
        <li className="social-list-item"><a className="social-list-link" href="https://twitter.com/rugiada8801"> <FaTwitter/></a></li>
        <li className="social-list-item"><a className="social-list-link" href="https://www.linkedin.com/in/zulma-rocio-martinez"><FaLinkedin /></a></li>
        
    </ul>    
</footer>
  )
}

export default Footer
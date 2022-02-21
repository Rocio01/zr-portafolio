import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock, // the clock icon
  faUserCircle, // the user circle icon
  faCoffee, // a cup of coffee
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
    <a href="mailto:zrmartinezg@gmail.com" className="footer-link">zrmartinezg@gmail.com</a>
    <ul className="social-list">
        <li className="social-list-item"><a className="social-list-link" href="https://codepen.io">a</a></li>
        <li className="social-list-item"><a className="social-list-link" href="http://dribbble.com">b</a></li>
        <li className="social-list-item"><a className="social-list-link" href="https://twitter.com">c</a></li>
        <li className="social-list-item"><a className="social-list-link" href="https://github.com">d</a></li>
    </ul>
    <FontAwesomeIcon
          icon={faClock}
          style={{ fontSize: 100, color: "blue", marginRight: 30 }}
        />
</footer>
  )
}

export default Footer
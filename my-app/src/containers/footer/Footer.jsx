import React from 'react';
import './footer.css';
import { Link } from "react-router-dom";
import { Brand } from "../../components";
import inlogo from '../../assets/In-White.png';
import gitlogo from '../../assets/Github-White.png';

function Footer() {
  return (
    <div>
        <div className="portfolio__footer section__padding">
          <nav className="portfolio__footer-content page__width section__padding"> 
            <ul>
              <li><Link to="/"> Home </Link></li>
              <li><Link to="/about"> About </Link></li>
              <li><Link to="/contact">  Contact </Link></li>
              <li><Link to="/projects"> Project </Link></li>
            </ul>
            
            <div className="portfolio__footer-right"> 
              <div className="portfolio__footer-credits">
                <p> Designed in <a>Figma</a> and coded in <a>Visual Studio Code 2</a> by <a>Coltrain</a>. Built with <a>React.js</a> and <a>CSS</a>, deployed with <a>Github</a>. </p>
              </div>
              <div className="portfolio__footer-logos">
                <a href="https://www.linkedin.com/in/coltrain/">
                  <img src= { inlogo } alt="LinkedIn logo"></img>
                </a>
                <a href="https://github.com/aColtrain">
                  <img src= { gitlogo } alt="Github logo" />
                </a>
              </div>
            </div>
          </nav>
          <p className="copyright">© Coltrain 2024</p>
        </div>

        
        
    </div>
    
  )
}

export default Footer
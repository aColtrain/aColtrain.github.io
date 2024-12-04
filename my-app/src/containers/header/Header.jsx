import React from 'react';
import './header.css';


import car from '../../assets/car.png';
import avatar from '../../assets/ColtrainWinterAvatar.png';
import profile from '../../assets/Coltrain_profile.png';

import { Link } from "react-router-dom";
import comcast from '../../assets/logos/logo_comcast_small.png';
import delta from '../../assets/logos/logo_delta_small.png';
import etd from '../../assets/logos/logo_etd_small.png';
import gtoit from '../../assets/logos/logo_gtoit_small.png';
import mediaarts from '../../assets/logos/logo_media_arts_small.png';



const Header = () => {
  return (
    <div>
      <div className="portfolio__header section__padding " id="home">
        <div className="portfolio__header-content">
          <h1 className="gradient__text"> Hi, I'm Coltrain!</h1>
          <p>
            Product designer and developer passionate about creating and building brands. I work within brand identities to create
            unified pixel perfect digital experiences for the users. When there is no brand identity, I shine by creating a system that will
            be a strong foundation for growth for you. 
          </p>
          <div className="portfolio__header-roles">
            <p className="gradient__text">Product Designer | Project Manager</p>
          </div>
          
            {/* <div className="gpt3__header-content__input">
              
              <input type="email" placeholder="Your Email Address"></input>
              <button type="button">Get Started</button>
            </div> */}
            {/* <div className="gpt3__header-content__people">
              <img src={people} alt="people" />
              <p>Gotta catch em all</p>
            </div> */}
        </div>
        <div className="portfolio__header-image">
          <img src={ profile } alt="avatar" />
        </div>
        
      </div>
      <div className="section__padding about__employment">
        <Link to="/media-arts"><img src={mediaarts} /></Link>
        <Link to="/delta"><img src={delta} /></Link>
        <Link to="/comcast"><img src={comcast} /></Link>
        <img src={etd} />
        <img src={gtoit} />
    </div>
  </div>
  )
}

export default Header
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
import getclimbing from '../../assets/logos/logo_GetClimbingOutside_small.png';
import zogranmedia from '../../assets/logos/logo_zogranmedia_small.png';
import blusafe from '../../assets/logos/logo_blusafe_small.png';


const Header = () => {
  return (
    <div>
      <div className="portfolio__header section__padding " id="home">
        <div className="portfolio__header-content">
          <h1 className="gradient__text"> Hi, I'm Coltrain!</h1>
          <p>
            Atlanta-based UX/UI designer and web developer passionate about creating intuitive and impactful digital experiences.
          </p>
          <div className="portfolio__header-roles">
            <p className="gradient__text">UX/UI Designer | Product Designer | Frontend Developer</p>
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
      <div className="logo">
        <div className="logo__slider">
          <img src={getclimbing} />
          <img src={blusafe} />
          <img src={zogranmedia} />
          <img src={mediaarts} />
          <img src={delta} />
          <img src={comcast} />
          <img src={etd} />
          <img src={gtoit} />
        </div>
        <div className="logo__slider">
          <img src={getclimbing} />
          <img src={blusafe} />
          <img src={zogranmedia} />
          <img src={mediaarts} />
          <img src={delta} />
          <img src={comcast} />
          <img src={etd} />
          <img src={gtoit} />
        </div>
        
        
      </div>
  </div>
  )
}

export default Header
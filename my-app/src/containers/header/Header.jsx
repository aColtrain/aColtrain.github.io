import React from 'react';
import './header.css';

import car from '../../assets/car.png';
import avatar from '../../assets/ColtrainWinterAvatar.png';



const Header = () => {
  return (
    <div className="portfolio__header section__padding " id="home">
        <div className="portfolio__header-content">
          <h1 className="gradient__text"> Hi, I'm Coltrain!</h1>
          <p>UX/UI designer with an emphasis in inclusion and accessiblily. </p>
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
          <img src={avatar} alt="avatar" />
        </div>
    </div>
  )
}

export default Header
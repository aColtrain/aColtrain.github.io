import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import car from '../../assets/car.png';



const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
          <h1 className="gradient__text"> Let's Make Something Amazing</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div className="gpt3__header-content__input">
            
            <input type="email" placeholder="Your Email Address"></input>
            <button type="button">Get Started</button>
          </div>
          <div className="gpt3__header-content__people">
            <img src={people} alt="people" />
            <p>Gotta catch em all</p>
          </div>
        </div>
        <div className="gpt3__header-image">
          <img src={car} alt="car" />
        </div>
    </div>
  )
}

export default Header
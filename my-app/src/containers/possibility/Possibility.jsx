import React from 'react';
import './possibility.css';
import car from '../../assets/car.png';

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="contact">
      <div className="gpt3__possibility-image">
        <img src= {car} alt="car" />
      </div>
      <div className="gpt3__possibility-content">
        {/* <h4>Get early access</h4> */}
        <h1 className="gradient__text">Beyond the work</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        {/* <h4>Get early access</h4> */}
      </div>
    </div>
  )
}

export default Possibility
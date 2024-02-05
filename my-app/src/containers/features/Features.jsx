import React from 'react';
import './features.css';
import { Feature } from "../../components";

const featuresData = [
  {
    title: 'pillow',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'Blanket',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'Comfortor',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">Future is now and I am tired</h1>
        <p>Request a nice bed</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (  
          <Feature title={item.title} text={item.text} key={ item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features
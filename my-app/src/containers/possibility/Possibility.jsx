import React from 'react';
import './possibility.css';
import car from '../../assets/car.png';
import alaska from '../../assets/about_gallery_alaska.png'
import balloon from '../../assets/about_gallery_balloon.png'
import camera from '../../assets/about_gallery_camera.png'
import camping from '../../assets/about_gallery_camping.png'
import climbing from '../../assets/about_gallery_climbing.png'
import donkey from '../../assets/about_gallery_donkey.png'
import kayak from '../../assets/about_gallery_kayak.png'
import snake from '../../assets/about_gallery_snake.png'
import winter from '../../assets/about_gallery_winter.png'
import wwr from '../../assets/about_gallery_wwr.png'


const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="contact">
      <div className="gpt3__possibility-image">
        {/* <img src= {car} alt="car" /> */}
        <div className="about__gallery-column">
          <img src= { alaska }/>
          <img src= { balloon }/>
          <img src= { donkey }/>
          <img src= { wwr }/>
          <img src= { camera }/>
        </div>
        <div className="about__gallery-column">
          <img src= { kayak }/>
          <img src= { winter }/>
          <img src= { camping }/>
          <img src= { climbing }/>
          <img src= { snake }/>
        </div>
        
      </div>
      <div className="gpt3__possibility-content">
        {/* <h4>Get early access</h4> */}
        <h1 className="gradient__text">Beyond the work</h1>
        <p>Away from the screen, you will find me climbing on things, existing on both sides of the camera, eating, and tending to my indoor forest and Winter (the most perfect <a>dog</a> baby). </p>
        {/* <h4>Get early access</h4> */}
      </div>
    </div>
  )
}

export default Possibility
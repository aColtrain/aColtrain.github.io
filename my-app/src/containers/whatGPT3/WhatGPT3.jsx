import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';


const WhatGPT3 = () => { 
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whpt3">
      <div className="gpt3__whatgpt3-feature"> 
        <Feature title="hi" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">Possibilities are endless</h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="one" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <Feature title="two" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <Feature title="three" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        
      </div>
    </div>
  )
}

export default WhatGPT3
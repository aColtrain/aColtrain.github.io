import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';


const WhatGPT3 = () => { 
  return (
    <div className="gpt3__whatgpt3 section__margin" id="projects">
      {/* <div className="gpt3__whatgpt3-feature"> 
        <Feature title="hi" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" />
      </div> */}
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">Computational Media</h1>
        <p>Where design meets computer science</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Interaction Design" text="The design of the interaction between users and products with the goal to create product that enable a user to achieve their objective(s) in the best way possible. -Interaction Design Foundation" />
        <Feature title="Media" text="Digital media that harnesses the power of computation to achieve inventive forms of expression. -Georgia Tech " />
        <Feature title="Computational Media" text="Creation, enhancement, and study of media forms for which computational processes enable deeply interactive and generative experiences, as well as the use of computation to understand and assist creation of media broadly. -UC Santa Cruz" />
        
      </div>
    </div>
  )
}

export default WhatGPT3
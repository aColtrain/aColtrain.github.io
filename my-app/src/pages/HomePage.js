import React from 'react';
import { Footer, Blog, Possibility, Skills, WhatGPT3, Header, ProjectThumbnails } from '../containers';
import { Project } from '../components';


const HomePage = () => {
  return (
    <div>
      <Header />



      {/* <h1>Possibility</h1> */}
      <Possibility />
      {/* <h1>Skills</h1> */}
      <Skills />
      {/* <h1>Whatgpt3</h1> */}
      <WhatGPT3 />
      <ProjectThumbnails />
      
    </div>
  )
}

export default HomePage

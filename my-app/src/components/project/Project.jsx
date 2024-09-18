import React, { useState } from 'react';
import './project.css';

const Project = ({projectImg, projectName, projectDescription, projectTags}) => {
  return (
    <div className="project-tile">
      <img src={projectImg} alt={projectName} />
      <div className="project-tile__details">
        <h2 className="project-tile__name">{projectName}</h2>
          
        <p>{projectDescription}</p>
        <div className="project-tile__tags gradient__text">
          <p>{projectTags}</p>
        </div>
      </div> 
    </div>
    

  )
}

export default Project


// const Feature = ({ title, text}) => {
//   return (
//     <div className="gpt3__features-container__feature">
//       <div className="gpt3__features-container__feature-title">
//         <div />
//         <h1>{title}</h1>
//       </div>
//       <div className="gpt3__features-container_feature-text">
//         <p>{text}</p>
//       </div>
//     </div>
//   )
// }

// export default Feature
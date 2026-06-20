import React from 'react'
import './employment.css';
import { FeatureCol } from '..';


const Employment = ({eyebrow,  name, logo, logoDescription, positionDescription, employer, jobTitle, platform, users, team, responsibilities, tools, timeline, results, overview, teamSize, impact1,impact2 }) => {
  return (
    <div>
    <div className="section__padding">
      <div className="eyebrow">
        <p> {eyebrow} </p>
      </div>
      <div className="title">
        <h1 className="gradient__text"> {name} </h1>
        <p>{positionDescription}</p> 
      </div> 
      <div className="employment">
        {/* <div className="employment__name"> */}
          {/* <h1 className="gradient__text"> {name} </h1> */}
          {/* <div className="employment__description">
            <p>{positionDescription}</p> 
          </div> */}
          {/* <div className="landing">
            { logo }
          </div> */}
        
        {/* </div> */}
        
        <div className="employment__team-container">
          {/* <Feature title="Client" text={ employer } /> */}
          <FeatureCol title="Role" text={ jobTitle } />
          <FeatureCol title="Platform" text={ platform } />
          {/* <FeatureCol title="User" text={ users } /> */}
          <FeatureCol title="Team" text={ team } />
          {/* <FeatureCol title="Responsibilities" text={ responsibilities } /> */}
          <FeatureCol title="Tools" text={ tools } />
          <FeatureCol title="Timeline" text={ timeline } />

            
          
        </div>
        {/* <div className="section__padding employment__description">
          <div className="employment__team">
            <div>
              <p>{positionDescription}</p> 
            </div> 
            <div>
            </div>
          </div>
        </div>      */}
      </div>
    </div>
    {/* <div className="section__padding employment responsibility_results"> */}
      {/* <div className="width50">
        <h2>📋 Responsibities</h2>
        <p>{ responsibilities }</p>
      </div> */}
      {/* <div className="width50">
        <h2>Impact</h2>
        <p>{ results }</p>
      </div> */}
      
    {/* </div> */}
    {/* <div className="section__padding">
      <h2>Overview</h2>
      <p>{ overview }</p>
    </div> */}
  </div>
  )
}

export default Employment
import React from 'react'
import './employment.css';
import { Feature } from '../../components';


const Employment = ({ name, logo, logoDescription, positionDescription, employer, jobTitle, deliverables, tools, teamSize, impact1,impact2 }) => {
  return (
    <div className="section__padding employment">
        <div className="employment__name">
          <h1 className="gradient__text"> {name} </h1>
          <div className="employment__description">
            <p>{positionDescription}</p> 
          </div>
        </div>
        
        <div className="employment__team-container">
          
          <div className="container">
            <Feature title="Employer" text={ employer } />
            <Feature title="Role" text={ jobTitle } />
            <Feature title="Deliverables" text={ deliverables } />
            <Feature title="Tools" text={ tools } />
            {/* <Feature title="Team Size" text={ teamSize } /> */}
          </div>
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
  )
}

export default Employment
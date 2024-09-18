import React from 'react'
import './employment.css';
import { Feature } from '../../components';


const Employment = ({ logo, logoDescription, positionDescription, jobTitle, teamSize, impact1,impact2 }) => {
  return (
    <div className="page__width section__padding">
        <div className="section__padding employment__logo">
          <img src={logo} alt={logoDescription} />
        </div>
        {/* <div className="section__padding employment__description">
          <p>{positionDescription}</p>    
        
          <div className="employment__team">
            <div className="employment__title">
              <p>Role: {jobTitle}</p>
            </div>
            <div className="employment__size">
              <p>Team Size: {teamSize}</p>
            </div>            
          </div> */}
          {/* <hr/>
          <div className="employment__impact">
            <div>
              <h2>{impact1}</h2>
              <ul>
                <li>hey</li>
                <li>hey</li>
                <li>hey</li>
                <li>hey</li>
              </ul>
            </div>
            <div>
              <h2>{impact2}</h2>
              <ul>
                <li>hey</li>
                <li>hey</li>
                <li>hey</li>
                <li>hey</li>
              </ul> */}
            {/* </div> */}
              
           

          {/* </div> */}

        {/* </div> */}
        <div className="employment__team-container">
          <div className="employment__description">
            <p>{positionDescription}</p> 
          </div>
          <div className="container">
            <Feature title="Role" text={ jobTitle } />
            <Feature title="Team Size" text={ teamSize } />
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
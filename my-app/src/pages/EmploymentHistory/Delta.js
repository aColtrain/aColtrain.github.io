import React from 'react'
import { delta } from "../../components/brand/imports"
import { Employment } from '../../components';

function Delta() {
  return (
    <div>
      <div>
        
        <Employment 
        logo={ delta }
        logoDescription="Delta Air lines logo" 
        positionDescription="As a part of the initial design team for the In-Flight Services Team at Delta Air Lines, 
        I helped introduce design methods and establish design standards for 6+ mobile apps with an audience of 28,000+ flight attendants. " 
        jobTitle="UX/UI Designer"
        teamSize="1-4"
        impact1="Team Impact"
        impact1List=""
        impact2="Products Impact"
        impact2List=""

        />
      </div>
      <div className="section__padding">
        <h2>Meal Manifesting</h2>
        <p></p>
      </div>
      
      
      {/* <img src={delta} /> */}
    </div>
  )
}

export default Delta
import React from 'react'
import { delta } from "../../components/brand/imports"
import { Employment } from '../../components';
import { ArticleR, ArticleL } from '../../components';

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
        <iframe styles="border: 1px solid rgba(0, 0, 0, 0.1);" width="50%" height="350" src="https://embed.figma.com/design/LOxr0uOoS7JG1K670ZUEwg/SkyPro-UI-(Copy)?node-id=823-14803&embed-host=share" allowfullscreen></iframe>
      </div>
      
      
      {/* <img src={delta} /> */}
    </div>
  )
}

export default Delta
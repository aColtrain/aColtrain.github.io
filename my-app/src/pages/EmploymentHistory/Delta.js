import React from 'react'
import { delta } from "../../components/brand/imports"
import { Employment } from '../../components';

function Delta() {
  return (
    <div className="section__padding">
      <h1> Delta </h1>
      <div>
        <Employment 
        logo={ delta }
        logoDescription="Delta Air lines logo" 
        positionDescription="UX/UI designer who worked on multiple projects" 
        jobTitle="UX/UI Designer"
        teamSize="1-4"
        />
      </div>
      
      {/* <img src={delta} /> */}
    </div>
  )
}

export default Delta
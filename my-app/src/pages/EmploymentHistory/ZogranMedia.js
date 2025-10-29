import React from 'react'
import { Employment, ArticleHead, ArticleL, ArticleR, CTA, Scope } from '../../components';

function ZogranMedia() {
  return (
    <div>
        <div className="header">
        <Employment 
        name= { "Zogran Media"}
        logo={ "" }
        logoDescription="Delta Air lines logo" 
        positionDescription={
          <>
          Creating a marketing website that highlights the companies brand identity work experience. 

          </>
        }
        employer="Zogran Media"
        jobTitle="Frontend Web Developer"
        deliverables="Marketing Website"
        tools="Figma, Squarespace"
        teamSize={
          <>
          1-4
          </>
        }
        impact1="Team Impact"
        impact1List=""
        impact2="Products Impact"
        impact2List=""
        />
      </div>
      <div className="section__padding">
        <Scope
        title1={
        <>
        Situation
        </>}
        text1={
          <>
          <ul>
            <li>  </li>
          </ul>
          
          </>
        }
        title2={
          <>
          Painpoints
          </>}
        text2={
          <>
          <ul>
            <li>Design process was too long</li>
            <li>Changes to designs were time-consuming</li>
            <li>No standardization</li>
            <li>Prototyping not supported</li>
          </ul>
          </>
        }
        title3={
          <>
          Tasks
          </>}
        text3={
          <>
          <ul>
            <li>Find software that supports design and prototype needs</li>
            <li>Create a style guide</li>
            <li>Create a master library of components</li>
          </ul>
          </>
        }
        />          
      </div>
    </div>
  )
}

export default ZogranMedia
import React from 'react'
import { Employment, ArticleHead, ArticleL, ArticleR, CTA, Scope } from '../../components';

function ZogranMedia() {
  return (
    <div>
        <div className="header">
        <Employment 
        name= { "Marketing Website"}
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
          goalText={
            <>
            <ul>
              <li>Creative and professional</li>
              <li>Highlight portfolio</li>
            </ul>
            
            </>
          }
          userText={
            <>
            <ul>
              <li>Clients that seek media services</li>
           
            </ul>
            </>
          }
          problemText={
            <>
            <ul>
              <li></li>
            </ul>
            </>
          }
          />          
        </div>
    </div>
  )
}

export default ZogranMedia
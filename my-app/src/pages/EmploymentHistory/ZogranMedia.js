import React from 'react'
import { Employment, ArticleHead, ArticleL, ArticleR, CTA, Scope } from '../../components';
import screens from '../../assets/zogranMedia_screens.png';



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
          Developed a marketing website that repositioned a brand for a new industry, balancing clarity, trust, and speed within a compressed timeline.
          {/* Creating a marketing website that highlights the companies brand identity work experience.  */}

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
      {/* <div className="section__padding">
        <Scope
        title1={
        <>
        Situation
        </>}
        text1={
          <>
          <ul>
            <li>Client is transitioning from improv to marketing and needs a website that reflects that  </li>
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
            <li>Lack of information heirarchy</li>
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
          </ul>
          </>
        }
        />          
      </div> */}
      <div className="section__padding">
        <img src={ screens } alt="" />
      </div>
    </div>
  )
}

export default ZogranMedia
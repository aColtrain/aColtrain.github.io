import React from 'react'
import { delta } from "../../components/brand/imports"
import { Employment } from '../../components';
import { ArticleHead, ArticleL, ArticleR, CTA } from '../../components';
import car from '../../assets/car.png';
import migration from '../../assets/delta_migration.png';
import buttons from '../../assets/delta_buttons.png';
import formfields from '../../assets/delta_formfields.png';
import lists from '../../assets/delta_lists.png';

import SimpleImageSlider from "react-simple-image-slider";


const images = [
  { buttons },
  { formfields },
  { lists },
];

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

      <div className="SkyProUI">
        <div className="section__padding">
          <ArticleHead
          title="SkyPro UI"
          description={
          <>
            The objective is to create a design library containing reusable components and guidelines for their use to streamline the design process. The library contains componentize stylized text, buttons, icons, etc. <br /><br />
            Team Size: 4
          </>
          }
          images={ <iframe styles="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="350" src="https://embed.figma.com/design/LOxr0uOoS7JG1K670ZUEwg/SkyPro-UI-(Copy)?node-id=823-14803&embed-host=share" allowfullscreen></iframe> }
          imageCaption="Click around the figma file!"
          />
        </div>
        <div className="section__padding">
          <ArticleR
          title="Library Migration"
          description="When setting up the library, our team explored several softwares. 
          We started with adobe XD then migrated to Axure RP and migrated again to Figma. 
          The reason for the migrations were Adobe XD did not meet prototyping needs at the time and Axure RP were limited in their design capabilities. Third time was a charm and we now use Figma to support the design needs."
          images={ migration } 
          />
        </div>
        <div className="section__padding">
          <ArticleL
          title={
            <>
              Buttons,
              Form Fields,
              & Lists
            </>
          }
          description="My contributions to the SkyPro UI mainly revolved around the design and component management of the buttons, form fields, and lists during the migrations."
          images={ formfields }
          />
        </div>
        <div className="section__padding">
          <CTA 
            title= "Skills Developed"
            description= "Adobe XD, Axure RP, Figma"
          />
        </div>
      </div>
  
      <div className="Meal Manifesting">
        <div className="section__padding">
          <ArticleHead
          title="Meal Manifesting"
          description={
            <>
              ljdaskfljkdsl;j
              <br /><br />
              Team Size: 1
            </>
            }
          images={<img src= { car } />}
          />
        </div>
        <div className="section__padding">
          <ArticleR
          title="Objection"
          description=""
          images={ car }
          />
        </div>
      </div>
      

    </div>
  )
}

export default Delta
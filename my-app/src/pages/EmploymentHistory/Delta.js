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
      <div className="section__padding">
        <ArticleHead
        title="SkyPro UI"
        description={
        <>
          Design library containing reusable components and guidelines for their use to streamline the design process. <br />
          Team Size: 4
        </>
        }
        images={ <iframe styles="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="350" src="https://embed.figma.com/design/LOxr0uOoS7JG1K670ZUEwg/SkyPro-UI-(Copy)?node-id=823-14803&embed-host=share" allowfullscreen></iframe> }
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
            Buttons,<br />
            Form Fields,<br />
            & Lists
          </>
        }
        description=""
        images={ <img styles="width:50px;" src={formfields}  /> }
        />
      </div>
      <div className="section__padding">
        <CTA 
          description= "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"
        />
      </div>

      <div className="section__padding">
        <ArticleHead
        title="Meal Manifesting"
        description=""
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





      <div>
        <h2>Meal Manifesting</h2>
        <iframe styles="border: 1px solid rgba(0, 0, 0, 0.1);" width="50%" height="350" src="https://embed.figma.com/design/LOxr0uOoS7JG1K670ZUEwg/SkyPro-UI-(Copy)?node-id=823-14803&embed-host=share" allowfullscreen></iframe>
      </div>
      
      
      {/* <img src={delta} /> */}
    </div>
  )
}

export default Delta
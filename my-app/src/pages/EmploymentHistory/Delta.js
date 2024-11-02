import React from 'react'
import { delta } from "../../components/brand/imports"
import { Employment } from '../../components';
import { ArticleHead, ArticleL, ArticleR, CTA } from '../../components';
import car from '../../assets/car.png';
import migration from '../../assets/delta_migration.png';
import buttons from '../../assets/delta_buttons.png';
import formfields from '../../assets/delta_formfields.png';
import lists from '../../assets/delta_lists.png';
import mealManifest1 from '../../assets/delta_mm_original.png';
import inventoryL from '../../assets/delta_mm_inventory_lowFidelity.png';
import inventoryH from '../../assets/delta_mm_inventory_highFidelity.png';
import manifestingL from '../../assets/delta_mm_manifesting_lowFidelity.png';
import manifestingH from '../../assets/delta_mm_manifesting_highFidelity.png';
import approach from '../../assets/delta_mm_approach.png';
import draft from '../../assets/delta_mm_draft.png';
import final from '../../assets/delta_mm_final.png';

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
        I helped introduce design methods and establish design standards for 6+ mobile apps with an audience of 28,000+ flight attendants." 
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
              Buttons, <br />
              Form Fields, <br />
              & Lists <br />
              OH MY!
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
              Designing a flow that allows flight attendants to log meal orders and keep track of inventory. 
              And design user flow with different entry points to accomplish this goal. 
              And integrate into Customer Card. Using up to date design UI. This project broken up into 2 parts Meal Inventory and Meal Manifesting
              <br /><br />
              Team Size: 1
            </>
            }
          images={ <iframe styles="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="350" src="https://embed.figma.com/design/cbYlhQ45s0XUe64rTjNLRm/%5BDESIGN%5D-Meal-Manifesting-Migration?embed-host=share" allowfullscreen></iframe> }
          imageCaption="Click around the Figma File!"
          />
        </div>
        <div className="section__padding">
          <ArticleR
          title="Objectives"
          description="Update the UI using the SkyPro UI guidelines. Streamline UX. "
          images={ mealManifest1 }
          imageCaption="Original Meal Manifesting Screen"

          />
        </div>
        <div className="section__padding">
          <ArticleL
          title="Approach"
          description={
            <>
              1. Understanding and mapping the current user experience and creating a new map of Meal Inventory<br/><br/>
              2. Get feedback from PO<br/><br/>
              3. Create a low fidelity draft of Meal Inventory and Meal Manifesting <br/><br/>
              4. Get feedback from PO<br/><br/>
              5. Create high fidellity draft with options of different points of entry for manifesting the meal with detailed descriptions about changes and functionality <br /><br/>
              6. Get feedback from PO<br /><br/>
              7. Create MVP <br />

            </>
          }
          images={ approach }
          />
        </div>
        <div className="section__padding">
          <ArticleR
          title="Draft"
          description="From the low fidelity versions of this design, I used existing components to make the high fidelity designs. I played around with recording customer orders within the customer card and the seat map. I would talk to the POs and the development team to make sure the designs aligned with their goals and that it can be developed properly."
          images={ draft }
          />
        </div>
        <div className="section__padding">
          <ArticleL
          title="Final"
          description="In the final iteration, I designed the whole meal inventory and meal manifesting process. The meal manifesting process includes several entry points into a customer card, senarios of weather a person has pre-selected a meal or not and using different functionaly of the iphone like haptic touch. "
          images={ final }
          />
        </div>
        <div className="section__padding">
          <CTA 
          title= "Skills Developed"
          description= "Working within an established design aesthetic and working with people with out a design background"
          />
        </div>
      </div>
      
      <div className="myCabin">
        <div className="section__padding">
          <ArticleHead 
          title="MyCabin Rewrite/ Cabin Discrepancy"
          description=""
          images={ <iframe styles="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="350" src="https://embed.figma.com/design/Zl4x0nkwM3gM3X8bPG5Dw5/MyCabin-Rewrite?node-id=0-1&embed-host=share" allowfullscreen></iframe> }
          />
        </div>
        <div className="section__padding">
          <ArticleR
          title="Objectives"
          description=""
          images=""
          />
        </div>
        <div className="section__padding">
          <ArticleL
          title="Approach"
          description=""
          images=""
          />
        </div>
        <div className="section__padding">
          <ArticleR
          title="Draft"
          description=""
          images=""
          />
        </div>
        <div className="section__padding">
          <ArticleL
          title="Final"
          description=""
          images=""
          />
        </div>
        <div className="section__padding">
          <CTA
          title= "Skills Developed"
          description= "---"
          />
        </div>

      </div>
      

    </div>
  )
}

export default Delta
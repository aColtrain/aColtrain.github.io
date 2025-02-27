import React from 'react'
import { ArticleHead, ArticleL, ArticleR, CTA, Scope, Employment } from '../../components';
import mealManifest1 from '../../assets/delta_mm_original.png';
import approach from '../../assets/delta_mm_approach.png';
import draft from '../../assets/delta_mm_draft.png';
import final from '../../assets/delta_mm_final.png';

function MealManifesting() {
  return (
    <div className="Meal Inventory and Meal Manifesting">
        <div className="header">
            <Employment 
            name={"Meal Manifesting"}
            logo={ <></> }
            positionDescription={
                <>
                A system that allows flight attendants to receive customer pre-order information, log meal orders, and keep track of meal 
                inventory in flight.  
                </>
            } 
            employer={"Delta Air Lines"}
            jobTitle="UX/UI Designer"
            deliverables="App designs"
            tools="Figma"
            teamSize={
                <>
                9
                <a id="MediaBridge" />
                </>
            }
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
                      <li>There are new capabilities redesign of the MyFlight App </li>
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
        {/* <div className="section__padding">
          <ArticleHead
          title={
            <>
            Meal Inventory and <br /> Meal Manifesting
            </>
          }
          description={
            <>
              A system that allows flight attendants to receive customer pre-order information, log meal orders, and keep track of meal 
              inventory in flight.  
              <br /><br />
              Team Size: 1
            </>
            }
          images={ 
          <>
          </>
          }
          imageCaption="Click around the Figma File!"
          />
        </div> */}
        <div className="section__padding">
          <ArticleR
          title="Objectives"
          description={
            <>
            The objective was to integrate the system into a customer card, a screen with customer information, and to design multiple 
            points of entry to the customer card, where the flight attendant will complete meal inventory and manifesting. 
            Secondarily, to update the UI using the SkyPro UI guidelines.
            </>
          }
          images={ 
            <>
            <img src={ mealManifest1 } alt=""/>
            </>

           }
          imageCaption="Original Meal Manifesting Screen"

          />
        </div>
        <div className="section__padding">
          <ArticleL
          title="Approach"
          description={
            <>
            Approaching this project, I started by mapping the current user experience and making notes of pain points. I met with the 
            product owners to get feedback on my initial assessment and to ask any questions, then I created a low fidelity design of the
            revised process. Once I got approval on the low-fidelity designs, I fleshed out the high fidelity designs and added
            detailed descriptions about changes and intended functionality of the new designs. 
            Lastly, I reduced the design to a minimal viable product.
            </>
          }
          images={
            <>
            <img src={ approach } alt="" />
            </>
          }
          />
        </div>
        <div className="section__padding">
          <ArticleR
          title="Draft"
          description={
            <>
            I incorporated functionality to support the fact that the inventory data would now be imported automatically as opposed to 
            manually by the flight attendant, as it was before. The original designs showed input fields for every line item. The new 
            designs reflected an edit state with a numerical keyboard for each line item and a confirmation button for all line items. 
            This is shown in the first 2 screens in the bottom row of the Approach images above.<br/><br/>

            I experiemented with recording customer orders within the customer card and the seat map. The first 2 screens in the images in 
            this section show the flight attendants being able to view all the entree options in a drop down menu. Throughtout the process,
            I would talk to the product owners and the development team to ensure the designs aligned with their goals and that they could be
            developed properly. From these meetings, I learned that the development team had plans to integrate haptic touch features. I 
            implemented that feature in my designs by having The flight attendants be able to view more information about an entree and 
            select it by pressing and holding that line item as shown in screen 3. Since there weren't many entree options, they were 
            displayed in an accordian list. However, displaying and selecting the drinks in the same manner would not be as efficient. 
            Therefore, the list of drinks is accompanied by a search bar filter as shown in the bottom row of the images in this section.
            The draft designs include descriptions under the frames that describe their intended interactions.
            </>
          }
          images={
            <>
            <img src={ draft } alt="" />
            </>
          }
          />
        </div>
        <div className="section__padding">
          <ArticleL
          title="Final"
          description={
            <>
            In the final iteration, I designed the whole meal inventory and meal manifesting process. The meal manifesting process included 
            several entry points into a customer card, senarios of whether a person has pre-selected a meal, and different 
            functionally of the iPhone like haptic touch. I also created designs for the minimal viable product, MVP.
            </>
          }
          images={
            <>
            <img src={ final } alt="" />
            </>
          }
          />
        </div>
        <div className="section__padding" id="MyCabin">
          <CTA 
          title= "Skills Developed"
          description= "Working within an established design aesthetic and working with people without a design background"
          />
        </div>
      </div>
  )
}

export default MealManifesting
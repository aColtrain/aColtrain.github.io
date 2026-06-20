import React from 'react'
import { ArticleHead, ArticleL, ArticleR, CTA, Scope, Employment, Feature, EyebrowHeader } from '../../components';
import mealManifest1 from '../../assets/delta_mm_original.png';
import approach from '../../assets/delta_mm_approach.png';
import draft from '../../assets/delta_mm_draft.png';
import final from '../../assets/delta_mm_final.png';
import deltaMeal from '../../assets/Delta_Meal_Thumbnail.png';


function MealManifesting() {
  return (
    <div className="Meal Inventory and Meal Manifesting">
        <div className="header">
            <Employment 
            eyebrow={"SkyPro: Meal Manifesting • Shipped 2023"}
            name={"Streamlining In-Flight Meal Selection"}
            logo={ <img src= {deltaMeal}/>} 
            positionDescription={
                <>
                {/* A system that allows flight attendants to receive customer pre-order information, log meal orders, and keep track of meal 
                inventory in flight.   */}
                Replaced manual inventory tracking with a streamlined digital workflow designed for fast-paced, offline-first cabin operations.
                </>
            } 
            employer={"Delta Air Lines"}
            jobTitle="UX/UI Designer"
            platform="Entrieprise IOS"
            users="28,000+ Flight Attendants"
            team={
              <>
              Product Owner <br />
              UX/UI Designer (me!) <br/>
              Devlopers
              </>
            }
            tools={
              <>
              Figma <br/>
              SkyPro Design System
              </>
            }
            responsibilities={
              <>
              End-to-end workflow design <br/>
              Interaction Design <br/>
              Information Archetecture <br/>
              MVP Definition <br/>
              Edge Case Planning
              </>
            }
            timeline={"Q3 2023"}
            teamSize={
                <>
                9
                <a id="MediaBridge" />
                </>
            }
            responsibilities={
              <>
              <ul>
                <li>Led end-to-end UX flow and interaction design</li>
                <li>Collaborated with product owners and flight attendants</li>
                <li>Owned the MVP experience and edge-case handling</li>      
              </ul>
              </>
            }
            overview={
              <>
              Meal Manifesting is a mobile system that enables flight attendants to manage meal inventory, capture customer orders, and reduce service errors during flights. I designed the end-to-end experience for fast-paced, offline-first environments using the SkyPro UI design system.
              </>
            }
            />
        </div>

      <div className="section__padding">
        <EyebrowHeader
        eyebrow={"Overview"}
        title={"Streamlining Meal Inventory Management for Flight Attendants"}
        />
        <p>
          Meal Manifesting is a core workflow within Delta's SkyPro ecosystem that enables flight attendants to manage meal inventory and record customer meal selections during in-flight service. Operating in a fast-paced, offline-first environment, the existing workflow relied on manual tracking and fragmented interfaces that increased service errors and cognitive load. My goal was to redesign the experience to streamline inventory management, simplify meal fulfillment, and improve operational efficiency for flight crews.
        </p>
      </div>
      <div className="section__padding">
        <EyebrowHeader
        eyebrow = {"Problem"}
        title = {"Fragmented Workflows and Manual Inventory Tracking"}
        />
        {/* <p>
          Flight attendants were required to manually audit meal inventory and manage customer meal selections across disconnected workflows. Inventory updates were not reflected in real time, requiring crews to switch between record keeping tools during service. This created several challenges:
        </p>
        <br/> */}

        <div className="column2">
          <div>
            <h3>Meal Inventory Tracking</h3>
            <p>Inventory counts required repetitive manual entry, increasing workload before and during service.</p>
          </div>
          <div>
            <h3>Fragmented User Flows</h3>
            <p>Meal inventory, seat maps, and passenger information existed in separate workflows, forcing users to switch between screens during time-sensitive service operations.</p>
          </div>
        </div>
        <br/>
        <div className="column2">
          <div>
            <h3>Increased Cognitive Load</h3>
            <p>Flight attendants needed to manage inventory status, customer preferences, and service delivery simultaneously in a fast-moving environment.</p>
          </div>
          <div>
            <h3>Service Errors</h3>
            <p>Limited visibility into meal status and inventory availability increased the risk of fulfillment mistakes.</p>
          </div>
        </div>

      </div>
      <div className="section__padding">
        <EyebrowHeader
        eyebrow = {"User and Contraints"}
        title = {"Delta Flight Attendants"}
        />
        <div className="column2">
          <div>
            <h3>Enviroment</h3>
            <p>
              <ul>
                <li>Fast-pace cabin service</li>
                <li>Offline-first cabin operation</li>
                <li>Limited screen space</li>
                <li>Frequent interruptions</li>
                <li>One handed mobile interaction</li>
              </ul>
            </p>
          </div>
          <div>
            <h3>Constraints</h3>
            <p>
              <ul>
                <li>Existing SkyPro desgin system</li>
                <li>Enterprise workflow requirements</li>
                <li>Technical platform limitations</li>
                <li>MVP delivery scope</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div className="section__padding">
        <EyebrowHeader
        eyebrow = {"Design Strategy"}
        title = {".."}
        />
        <p></p>
      </div>
      <div className="section__padding">
        <EyebrowHeader
        eyebrow = {"Iterations"}
        title = {""}
        />
        <p></p>
      </div>
      <div className="section__padding">
        <EyebrowHeader
        eyebrow = {"MVP Prioritization"}
        title = {""}
        />
        <p></p>
      </div>
      <div className="section__padding">
        <EyebrowHeader
        eyebrow = {"Final Solution"}
        title = {""}
        />
        <p></p>
      </div>
      <div className="section__padding">
        <EyebrowHeader
        eyebrow = {"Reflection"}
        title = {""}
        />
        <p></p>
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
                <li>Manual tallying</li>
                <li>Fragmented seat maps</li>
                <li>High error rate</li>
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
                <li>Design for fast paced- mobile enviroment</li>
                <li>Create a glancable seatmap</li>
                <li>Redesign workflow for taking meal inventory and recording customer orders taking account for edge cases.</li>
              </ul>
              </>
            }
            />          
          </div> */}
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
          description= "Working within an established design system and working with people without a design background"
          />
        </div>      



        <div className="header">
            <Employment 
            name={"SkyPro: Streamlining In-Flight Meal Selection"}
            logo={ <></> }
            positionDescription={
                <>
                {/* A system that allows flight attendants to receive customer pre-order information, log meal orders, and keep track of meal 
                inventory in flight.   */}
                System for managing in-flight meal inventory and customer orders
                {/* Meal Manifesting is a mobile system that enables flight attendants to manage meal inventory, capture customer orders, and reduce service errors during flights. I designed the end-to-end experience for fast-paced, offline-first environments using the SkyPro UI design system. */}
                </>
            } 
            employer={"Delta Air Lines"}
            jobTitle="UX/UI Designer"
            platform="Enterprise iOS"
            user="28,000+ Flight Attendants"
            tools="Figma"
            teamSize={
                <>
                9
                <a id="MediaBridge" />
                </>
            }
            team="Product Owner, UX/ UI Designer, Flight Attendants"
            
            results={
              <>
              <ul>
                 <li>Redesigned meal inventory and ordering workflows</li>
                 <li>Consolidated fragmented service flows into a unified customer card</li>
                 <li>Designed for fast-paced, offline-first flight operations</li>
              </ul>
              </>
            }
            />
        </div>
        <div style={{width: "1008px"}}>
          <img style={{width: "1008px"}} src={ final } alt="" />
        </div>
        <div>
          <ArticleR 
          title="The Problem"
          description={
            <>
            </>
          }
          images={
            <>
            <img src={ mealManifest1 } alt="" />
            </>
          }
          />
        </div>
        

      </div>
  )
}

export default MealManifesting
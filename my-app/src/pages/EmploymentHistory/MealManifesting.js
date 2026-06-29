import React from 'react'
import { ArticleHead, ArticleL, ArticleR, CTA, Scope, Employment, Feature, EyebrowHeader } from '../../components';
import mealManifest1 from '../../assets/delta_mm_original.png';
import approach from '../../assets/delta_mm_approach.png';
import draft from '../../assets/delta_mm_draft.png';
import final from '../../assets/delta_mm_final.png';
import deltaMeal from '../../assets/Delta_Meal_Thumbnail.png';
import mmLanding from '../../assets/delta_mm_landing.png';
import mmOverview from '../../assets/delta_mm_overview.png';

function MealManifesting() {
  return (
    <div className="Meal Inventory and Meal Manifesting">
        <div className="header">
            <Employment 
            eyebrow={"SkyPro: Meal Manifesting • Shipped 2023"}
            name={"Streamlining In-Flight Meal Selection"}
            hero={
               <img src= {mmLanding}/>
              } 
            heroDescription= {
              <>
              Unified inventory management, passenger information, and meal fulfillment into a single workflow for flight attendants.
              </>
              
            }
            positionDescription={
                <>
                {/* A system that allows flight attendants to receive customer pre-order information, log meal orders, and keep track of meal 
                inventory in flight.   */}
                {/* Replaced manual inventory tracking with a streamlined digital workflow designed for fast-paced, offline-first cabin operations. */}
                Unified inventory management, passenger information, and meal fulfillment into a single workflow for 28,000+ flight attendants.
                </>
            } 
            employer={"Delta Air Lines"}
            jobTitle="UX/UI Design Co-Op"
            platform="Entrieprise IOS"
            users="28,000+ Flight Attendants"
            team={
              <>
              Product Owner <br />
              iOS Engineers <br/>
              UX/UI Design Co-Op
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
            // timeline={"Q3 2023"}
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
        <img className="width100" src={mmOverview}/>
      </div>
      {/* <div className="section__padding">
        <EyebrowHeader
        eyebrow = {"Problem"}
        title = {"Fragmented Workflows and Manual Inventory Tracking"}
        />
        <p>
          Flight attendants were required to manually audit meal inventory and manage customer meal selections across disconnected workflows. Inventory updates were not reflected in real time, requiring crews to switch between record keeping tools during service. This created several challenges:
        </p>
        <br/>

        <div className="column50">
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
        <div className="column50">
          <div>
            <h3>Increased Cognitive Load</h3>
            <p>Flight attendants needed to manage inventory status, customer preferences, and service delivery simultaneously in a fast-moving environment.</p>
          </div>
          <div>
            <h3>Service Errors</h3>
            <p>Limited visibility into meal status and inventory availability increased the risk of fulfillment mistakes.</p>
          </div>
        </div>

      </div> */}
      <div className="section__padding">
        <EyebrowHeader
        eyebrow = {"User and Contraints"}
        title = {"Delta Flight Attendants"}
        />
        <div className="column50">
          <div>
            <h2>Enviroment</h2>
            <p>
              - Fast-pace cabin service
              - Offline-first cabin operation
              - Limited screen space
              - Frequent interruptions
              - One handed mobile interaction
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
            <h2>Constraints</h2>
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
        title = {"Designing for Speed, Accuracy, and Visibility"}
        />
        <div>
          <h2>Consolidating Meal Management Into the Customer Card</h2>
          <p>
            One of the primary goals of the redesign was reducing the need for flight attendants to navigate between multiple screens during service.
            <br/>
            <br/>
            I integrated meal inventory and manifesting workflows directly into the customer card experience, allowing crews to access meal information within the same workflow used to manage passenger interactions.
            <br/>
            <br/>
            This created multiple entry points into meal management while keeping the experience centered around passenger context.
          </p>
          <h3>Outcome</h3>
          <p>
            <ul>
              <li>Reduced workflow fragmentation</li>
              <li>Improved access to passenger meal information</li>
              <li>Simplified service execution</li>
            </ul>
          </p>
        </div>
        <div>
          <h2>Reducing Manual Inventory Management</h2>
          <p>
            During discovery, I learned that inventory data would be imported automatically rather than manually entered by flight attendants.
            <br/>
            <br/>
            To support this change, I redesigned the workflow around inventory adjustments instead of full inventory entry. Rather than displaying editable fields for every item, the interface provided streamlined edit states with numeric input controls and simplified confirmation actions.
            <br/>
            <br/>
            This reduced repetitive data entry while preserving flexibility for inventory corrections when needed.
          </p>
        </div>
        <div>
          <h2>Designing Selection Patterns Around Inventory Size</h2>
          <p>Different inventory categories required different interaction patterns.</p>
          <div className="column50">
            <div>
              <h3>Entrées</h3>
              <p>
                Because the number of available entrée options was relatively small, I used an accordion-based selection pattern that allowed flight attendants to quickly scan available choices while minimizing visual clutter.
                <br/>
                <br/>
                Pre-selected customer meals were surfaced directly within the workflow to provide additional context during service.
              </p>
            </div>
            <div>
              <h3>Beverages</h3>
              <p>
                Beverage inventories contained significantly more options than entrée selections.
                <br/>
                <br/>
                Using the same accordion pattern would have increased scrolling and slowed down selection. Instead, I introduced search and filtering functionality that allowed crews to quickly locate beverages without navigating long lists.
                <br/>
                <br/>
                This approach reduced interaction cost while maintaining consistency across the broader SkyPro experience.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2>Improving Access Through Contextual Navigation</h2>
          <p>
            Flight attendants could access meal information directly through the seat map or through an expanded passenger profile.
            <br/>
            <br/>
            This flexibility allowed crews to choose the most efficient workflow based on where they were in the service process.
            <br/>
            <br/>
            To improve visibility, I also introduced visual indicators that surfaced meal-related information directly within the seat map, reducing the need to open individual passenger records.
          </p>
        </div>
      </div>
      <div className="section__padding">
        <EyebrowHeader
        eyebrow = {"Iterations"}
        title = {"Refining the Workflow Through Collaboration"}
        />
        <p>The project evolved through regular feedback sessions with product owners and iOS engineers.<br/>
            <br/>

Early wireframes focused on validating workflow structure and information hierarchy before visual refinement. Through iterative reviews, I refined navigation patterns, inventory management states, and passenger meal selection workflows.<br/>
            <br/>

During collaboration with engineering, I learned about planned support for native iOS haptic interactions. I incorporated press-and-hold interactions that allowed flight attendants to access additional meal details and make selections without disrupting their current workflow.<br/>
            <br/>

These discussions helped ensure that proposed solutions aligned with both user needs and technical feasibility.</p>
      </div>
      <div className="section__padding">
        <EyebrowHeader
        eyebrow = {"MVP Prioritization"}
        title = {"Focusing on the Highest-Impact Improvements"}
        />
        <p>To support implementation, the final solution was reduced to a focused Minimum Viable Product.</p>
        <div className="column50">
          <div>
            <h2>Included</h2>
            <p>
              <ul>
                <li>Meal inventory management</li>
                <li>Customer meal selection</li>
                <li>Customer card integration</li>
                <li>Seat map entry points</li>
                <li>Pre-selected meal states</li>
                <li>Offline-first workflow support</li>
              </ul>
            </p>
          </div>
          <div>
            <h2>Deferred</h2>
            <p>
              <ul>
                <li>Secondary service scenarios</li>
                <li>Additional reporting capabilities</li>
                <li>Future workflow enhancements</li>
              </ul>
            </p>
          </div>
        </div>
        <p>Prioritizing these core experiences allowed the team to focus on the highest-impact operational improvements while creating a foundation for future iterations.</p>
      </div>
      <div className="section__padding">
        <EyebrowHeader
        eyebrow = {"Final Solution"}
        title = {"The Redesigned Experience"}
        />

        <p>The final design unified meal inventory management and passenger meal fulfillment into a streamlined workflow optimized for in-flight service operations.</p>
        <h3>Key Imporvements</h3>
        <p>
          <ul>
            <li>Integrated meal management within the customer card experience</li>
            <li>Multiple entry points through seat maps and passenger profiles</li>
            <li>Reduced manual inventory management</li>
            <li>Search-driven beverage selection workflows</li>
            <li>Support for pre-selected meal states</li>
            <li>Native iOS interaction patterns, including haptic touch functionality</li>
            <li>Improved visibility into meal inventory and customer selections</li>
          </ul>
        </p>
        <p>The resulting experience reduced workflow fragmentation and created a more efficient system for managing meal service in a high-pressure, offline-first environment.</p>

      </div>
      <div className="section__padding">
        <EyebrowHeader
        eyebrow = {"Reflection"}
        title = {"Key Takeaways"}
        />
        <p>This project strengthened my ability to design operational workflows within enterprise environments while balancing user needs, business requirements, and technical constraints.</p>
        <div className="column33">
          <div>
            <h3>Designing for Operational Efficiency</h3>
            <p>Balancing speed, accuracy, and usability in high-pressure service environments.</p>
          </div>
          <div>
            <h3>Working Within Enterprise Systems</h3>
            <p>Designing new functionality while maintaining consistency within an established design system.</p>
          </div>
          <div>
            <h3>Cross-Functional Collaboration</h3>
            <p>Partnering with product owners and engineers to refine solutions, evaluate feasibility, and define MVP scope.</p>
          </div>
        </div>
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
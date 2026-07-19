import React from 'react'
import { ArticleHead, ArticleL, ArticleR, CTA, Scope, Employment, Feature, EyebrowHeader } from '../../components';
import mealManifest1 from '../../assets/delta_mm_original.png';
import approach from '../../assets/delta_mm_approach.png';
import draft from '../../assets/delta_mm_draft.png';
import final from '../../assets/delta_mm_final.png';
import deltaMeal from '../../assets/Delta_Meal_Thumbnail.png';
import mmLanding from '../../assets/delta_mm_landing.png';
import mmOverview from '../../assets/delta_mm_overview.png';
import mmCustomerCard from '../../assets/delta_mm_customercard.png';
import mmInventory from '../../assets/delta_mm_inventory.png';
import mmEntreeBeverage from '../../assets/delta_mm_entree_beverage.png';
import mmHaptic from '../../assets/delta_mm_haptic.png';

function MealManifesting() {
  return (
    <div className="Meal Inventory and Meal Manifesting">
        <div className="header">
            <Employment 
            eyebrow={"SkyPro: Meal Manifesting • Designed 2023"}
            name={"Streamlining In-Flight Meal Selection"}
            hero={
               <img src= {mmLanding}/>
              } 
            heroDescription= {
              <>
              Redesigned Delta's enterprise meal workflow by unifying inventory management, passenger context, and meal fulfillment into a single experience used by 28,000+ flight attendants.
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
            timeline={ "May - October 2023" }
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
              Meal Manifesting is an enterprise workflow within Delta's SkyPro ecosystem that supports meal inventory and passenger meal fulfillment during in-flight service. I redesigned the experience to replace fragmented workflows with a unified, offline-first system that improved speed, visibility, and operational efficiency for 28,000+ flight attendants.
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
          Meal Manifesting is a core workflow within Delta's SkyPro ecosystem that enables flight attendants to manage meal inventory and fulfill customer meal selections during in-flight service.
        </p>
        <br/>
        <p>The existing experience relied on fragmented workflows and manual inventory management, increasing cognitive load in a fast-paced, offline-first environment.</p>
<br/>
        <p>I redesigned the experience to unify inventory management, passenger information, and meal fulfillment into a streamlined workflow that reduced context switching and supported faster service.</p>
                
        <br/>
        <img className="width100" src={mmOverview}/>
        <p className="caption">The redesigned workflow unified inventory management, seat map navigation, and passenger meal fulfillment into a connected experience.</p>
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
        eyebrow = {"Design Context"}
        title = {"Delta Flight Attendants"}
        />
        <div className="column50">
          <div>
            <h2>Operating Enviroment</h2>
            <p>
              {/* - Fast-pace cabin service <br/>
              - Offline-first cabin operation <br/>
              - Limited screen space <br/>
              - Frequent interruptions <br/>
              - One handed mobile interaction <br/> */}
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
            <h2>Project Constraints</h2>
            <p>
              <ul>
                <li>Existing SkyPro design system</li>
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
        eyebrow = {"Key Design Decisions"}
        title = {"Designing for Speed, Accuracy, and Visibility"}
        />
        <div>
          <h2>Integrating Meal Management Into the Customer Card</h2>
          <p>
            {/* One of the primary goals of the redesign was reducing the need for flight attendants to navigate between multiple screens during service.
            <br/>
            <br/> */}
            I integrated meal inventory and manifesting workflows directly into the customer card experience, allowing crews to access meal information within the same workflow used to manage passenger interactions.
            </p>
            <br/>
            <img className="width100" src={ mmCustomerCard } />
            <br/>
            <p>
            Multiple entry points allowed crews to begin meal management from the workflow that best matched their current task.
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
          <img className="width100" src={ mmInventory } />
          <p>
            During discovery, I learned that inventory data would be imported automatically rather than manually entered by flight attendants.
            <br/>
            <br/>
            To support this change, I redesigned the workflow around inventory adjustments instead of full inventory entry. Rather than exposing every field for editing, I introduced inline editing states with numeric input and a simplified confirmation flow.
            <br/>
            <br/>
            This reduced repetitive data entry while preserving flexibility for inventory corrections when needed.
          </p>
        </div>
        <div>
          <h2>Designing Selection Patterns Around Inventory Size</h2>
          <p>Different inventory categories required different interaction patterns.</p>
          <img className="width100" src={ mmEntreeBeverage } />
          <div className="column50">
            <div>
              <h3>Entrées</h3>
              <p>
                {/* A limited set of options made scanning faster than searching, so an accordion minimized visual complexity.  */}
                {/* <br/>
                <br/> */}
                Although search scales better, the limited number of entrée options made scanning faster and required fewer interactions.
              </p>
            </div>
            <div>
              <h3>Beverages</h3>
              <p>
                A much larger inventory made scrolling inefficient, so search and filtering reduced selection time.
              </p>
            </div>
          </div>
        </div>
        {/* <div>
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
        </div> */}
      </div>
      <div className="section__padding">
        <EyebrowHeader
        eyebrow = {"Future Interation"}
        title = {"Refining the Workflow Through Collaboration"}
        />
        <p>The project evolved through regular feedback sessions with product owners and iOS engineers.<br/>
            <br/>
            Early wireframes focused on validating workflow structure and information hierarchy before visual refinement. Through iterative reviews, I refined navigation patterns, inventory management states, and passenger meal selection workflows.<br/>
            <br/>
            During collaboration with engineering, I learned about planned support for native iOS haptic interactions. I incorporated press-and-hold interactions that allowed flight attendants to access additional meal details and make selections without disrupting their current workflow.<br/>
            <br/>
            <img className="width100" src={ mmHaptic } />

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
            <h2>MVP Scope</h2>
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
            <h2>Future Opportunities</h2>
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
        <img className="width100" src={ final } />

        <h3>Key Improvements</h3>
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
        <p>The proposed solution consolidated meal inventory, passenger information, and meal fulfillment into a single workflow designed for fast-paced cabin operations.</p>

      </div>
      <div className="section__padding">
        <EyebrowHeader
        eyebrow = {""}
        title = {"Reflection"}
        />
        
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
    </div>
  )
}

export default MealManifesting
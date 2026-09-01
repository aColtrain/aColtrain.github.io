import React from 'react'
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import { comcast } from "../../components/brand/imports"
import { Employment, EyebrowHeader } from '../../components';
import { ArticleHead, ArticleL, ArticleR, CTA, Scope } from '../../components';

import maOverview from "../../assets/comcast/comcast_myapps_overview.png";
import maChallenges1 from "../../assets/comcast/comcast_myapps_challenges1.png";
import maChallenges2 from "../../assets/comcast/comcast_myapps_challenges2.png";
import maIteration from "../../assets/comcast/comcast_myapps_iteration.png";
import maIteration2 from "../../assets/comcast/comcast_myapps_iteration2.png";
import maIteration3 from "../../assets/comcast/comcast_myapps_iteration3.png";
import maUF1 from "../../assets/comcast/comcast_myapps_userflow1.png";
import maUF2 from "../../assets/comcast/comcast_myapps_userflow2.png";
import maFinal1 from "../../assets/comcast/comcast_myapps_final1.png";
import maFinalAppO from "../../assets/comcast/comcast_myapps_final_appoverview.png";
import maFinalUser from "../../assets/comcast/comcast_myapps_final_user.png";
import maFinalBilling from "../../assets/comcast/comcast_myapps_final_billing.png";




import miniOriginal from "../../assets/comcast/comcast_mini_original.png";
import miniLowFi from "../../assets/comcast/comcast_mini_lowFi.png";
import miniApproach from "../../assets/comcast/comcast_mini_approach.png";
import miniUIRevisions from "../../assets/comcast/comcast_mini_UIRevisions.png";
import logoUserTesting from "../../assets/logos/logo_usertesting.png";
import miniReviewRevisions from "../../assets/comcast/comcast_mini_ReviewRevisions.png";


function Comcast() {
  return (
    <div>
      <div className="header">
        <Employment
        eyebrow={"Comcast My Apps Dashboard"}
        name={"Simplifying a Complex B2B Marketplace for Small Businesses"}
        hero={
          <img src= {maOverview}/> 
        } 
        positionDescription={
          <>
          {/* Helping standardize UI components and improve collaboration across Delta's internal SkyPro ecosystem. */}
          {/* A shared design system that standardized UI components, accelerated design workflows, and unified six in-flight applications across Delta's SkyPro ecosystem. */}
          </>
        }
        jobTitle={"Product UX Design Intern"}
        team={
          <>
          UX Designer<br/>
          Product Manager
          </>
        }
        timeline={"May - August 2022"}

        />
      </div>
      <div className="section__padding">
        {/* <img className="width100" src={maOverview}/> */}
        <EyebrowHeader 
        eyebrow={"Overview"}
        title={"A B2B marketplace for Small to Meduim Sized Businesses"}
        />
        <p>
         My Apps Dashboard was a B2B SaaS marketplace designed to help small businesses discover and manage Comcast products and services.
        </p>
        <p>
          I focused on structuring the experience across account management, billing, users, and applications, using workflows and user testing to identify opportunities for a clearer, more scalable experience.
        </p>
      </div>
      <div className="section__padding">
        <EyebrowHeader 
        eyebrow={"The Challenge"}
        title={"Making a Complex Marketplace Easier to Navigate"}
        />
        <img className="width100" src={maChallenges1}/>
        <p>
         MiniMart brought together a wide range of account and product-management tasks. Users needed to manage applications, billing, users, and permissions without navigating an unnecessarily complex system.
        </p>
        <p>
          The challenge was to create a clear structure for these interconnected workflows while keeping individual tasks easy to complete.
        </p>
      </div>
      <div className="section__padding">
        <EyebrowHeader
        eyebrow={"Identifying Constraints and Requirements"}
        title={"Mapping the Experience"}
        />
        <p>
          I began by breaking down the marketplace into its core user tasks and identifying how users would move between discovery, evaluation, and management.
        </p>
        <p>
          This helped establish the relationships between content, products, and key actions before moving into interface design.
        </p>
        <h3>Initial Journey</h3>
        <img src={maUF1} alt="" className="width100" />
        <p className="caption">Initial flow: Key transitions and management tasks were not yet clearly defined.</p>
        <h3>Refined Journey</h3>
        <img src={maUF2} alt="" className="width100" />
        <p className="caption">Refined flow: Connected application management, user assignment, and subscription tasks into a more complete experience.</p>
        
      
        <div className="column33">
          <div>
            <h3>Application</h3>
            <p>Managing products, subscriptions, and application access.</p>
          </div>
          <div>
            <h3>Users</h3>
            <p>Adding users and managing access.</p>
          </div>
          <div>
            <h3>Billing</h3>
            <p>Managing subscriptions and account billing.</p>
          </div>
        </div>
       {/* <div>
            <h2>Key Focus Areas</h2>
            <p>
              <ul>
                <li>Marketplace Navigation</li>
                <li>User Flows</li>
                <li>Reduced Redundant Screens</li>
                <li>Product and User Management</li>
              </ul>
            </p>
          </div> */}
      </div>
      {/* <div className="section__padding">
        <EyebrowHeader 
        eyebrow={"Research"}
        title={"Identifying User Friction"}
        />
        <p>
          After understanding painpoints, I created a prototype. Then I used user research and usability testing to identify confusing workflows and opportunities to simplify the experience.
        </p>
      </div>
      <div className="section__padding">
        <EyebrowHeader 
        eyebrow={"Information Achitechture"}
        title={"Creating a Clearer and Streamlined Structure"}
        />
        <p>
          I organized the marketplace around the way small businesses would actually look for and manage products.
<br/>
Rather than treating each feature as an isolated experience, I focused on creating a structure that connected the different parts of the platform.
<br/>
This established a foundation for a scalable marketplace experience.
        </p>
      </div> */}
      <div className="section__padding">
        <EyebrowHeader 
        eyebrow={"Design"}
        title={"Refining the Workflows"}
        />
        <p>
          With the structure established, I mapped the key workflows users would follow throughout the marketplace.
        </p>
    
        <p>
          The flows helped identify unnecessary steps, clarify decision points, and create a more consistent experience across the platform.
        </p>
    
        <p>
          From discovery → evaluation → action
        </p>
      </div>
      <div className="section__padding">
        <EyebrowHeader 
        eyebrow={"Testing and Iteration"}
        title={"Designing through Feedback"}
        />
        <img className="width100" src={maIteration}/> 
        <p>
          I tested prototypes with users and used their feedback to refine navigation, hierarchy, and key interactions.
        </p>
        <p>The final design now includes user information, subsciption type, and important call-to-actions permentantly displayed on the dashboard allowing the user to get information they need with less interaction.</p>
      </div>
      <div className="section__padding">
        
        <EyebrowHeader 
        eyebrow={"Final Experience"}
        title={"A Clearer Foundation for MiniMart"}
        />
        <p>
          The final experience brought application, user, and billing management into a unified account experience, giving businesses a clearer way to manage their products and services.
        </p>
        <h3>My App Dashboard</h3>
        <img src={maFinal1} alt="" className="width100" />
        <div className="column33">
          <div>
            <h3>App Overview</h3>
            <img src={maFinalAppO} alt="" className="width100" />
          </div>
          <div>
            <h3>User Management</h3>
            <img src={maFinalUser} alt="" className="width100" />
          </div>
          <div>
            <h3>Billing</h3>
            <img src={maFinalBilling} alt="" className="width100" />
          </div>
        </div>
        {/* <img src={maFinal2} alt="" className="width100" /> */}
      </div>
      <div className="section__padding">
        <EyebrowHeader 
        eyebrow={"Takeaways"}
        title={"User Experience First. User Interface Second."}
        />
        <div className="column33">
          <div>
            <h3>Structure comes first</h3>
            <p>A strong information architecture creates the foundation for a scalable product.</p>
          </div>
          <div>
            <h3>Complex doesn't have to mean complicated</h3>
            <p>Breaking a large B2B experience into clear tasks made the marketplace easier to understand.</p>
          </div>
          <div>
            <h3>Design for the system</h3>
            <p>Thinking about how features connect helped create a more cohesive experience instead of a collection of individual screens.</p>
          </div>
        </div>
      </div>








      {/* <ScrollToHashElement/> */}
      {/* <div className="sidenav">
        <div>
          <a href="#MiniMart"><p>MiniMart</p></a>
          <a href="#Approach"><p>Approach</p></a>
          <a href="#Evaluate"><p>Evaluating Original UI</p></a>
          <a href="#Low"><p>Low-Fidelity Designs</p></a>
          <a href="#Reviews"><p>Reviews & Revisions</p></a>
          <a href="#Prototyping"><p>Prototyping</p></a>
          <a href="#User"><p>User Testing</p></a>
          <a href="#UI"><p>UI Revisions</p></a>
          <a href="#Final"><p>Final Presentation</p></a>
        </div>
      </div> */}
      {/* <div className="header">
        <Employment 
        name= {"MiniMart My Apps"}
        logo={ comcast }
        logoDescription="Comcast logo" 
        positionDescription={
        <>
        I worked on a team of 4 to redesign a marketplace for SaaS products for small to medium sized businesses. 
        We began by identifying user pain points and conducting a competitive analysis. We created a prototype and went through multiple sessions of user testing
        and several rounds of feedback to create the optimal user experience.
        </>
        }
        employer="Comcast Business"
        jobTitle="Product UX Designer"
        deliverables="SaaS Marketplace"
        tools="Figma, UserTesting.com"
        teamSize={
          <>
          3
          <a id="MiniMart" />
          </>
        }
        />
      </div> */}

      <div className="MiniMart">
        {/* <div className="section__padding">
          <ArticleHead
          title={"MiniMart"}
          description={
            <>
            MiniMart is an eCommerce platform for small to medium sized businesses. <br/>
            <br/>
            Team Size: 3
            </>
          }
          images={
            <>
            <iframe styles="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="350" src="https://embed.figma.com/design/HD2BlUNU2KsimbM0YzhJLA/My-Apps?node-id=113-5242&embed-host=share" allowfullscreen></iframe>
            </>
          
          }
          imageCaption={
          <>
          <a id="Approach"/>
          </>
          }
          />
        </div> */}
        {/* <div className="section__padding">
          <Scope
          goalText={
            <>
            <ul>
              <li>Develop the application dashboard and management functionality </li>
              <li>Integrate the Comcast design aesthetic</li>
            </ul>
            
            </>
          }
          userText={
            <>
            <ul>
              <li>Small to medium size business owners or management</li>
              <li>Has multiple software applications and needs to manage users</li>
            </ul>
            </>
          }
          problemText={
            <>
            <ul>
              <li>Unnecessary redunancy</li>
              <li>Complicated processes</li>
              <li>Unstructured visuals</li>
            </ul>
            </>
          }
          />          
        </div> */}
        {/* <div className="section__padding">
          <ArticleR
          title={"Evaluating the Original Design"}
          description={
            <>
            The original UX was indirect and repetitve; there was no heirarchy of information. There were 7
            navigational links and some of them lead to the same page and others were non functional. <br/>
            <br/>
            Furthermore, the original UI was not consistent with the Comcast design aesthetic. 
            </>
          }
          images={
            <>
            <img src={ miniOriginal } alt="" />
            </>
          }
          />
        </div> */}
        {/* <div className="section__padding">
          <ArticleL
          title={"Approach"}
          description={
            <>
            When starting this project, I focused on understanding the current designs and its functionality. Then, I
            did a comparative analysis with other marketplaces. For this project, I looked at Microsoft
            365 and Adobe Creative Cloud designs and functionality. Throughout this process, I made notes on how to apply what I found and sketched design 
            ideas on paper. Then, I looked at the design library and started designing screen by screen, seeking feedback along the way. Once I have
            I finished an intial draft, I created a prototype and got feedback on the functionally. Finally, I focused on refining the UI.
            </>
          }
          images={
            <>
            <img src={ miniApproach } alt="" />
            </>
          }
          />
        </div> */}
        
        {/* <div className="section__padding">
          <ArticleR
          title={"Low Fidelity Designs"}
          description={
            <>
            Low fidelity designs were the launching point for the project. They are a quick way to visualize options without spending
            a lot of time on them. The designs get feedback and then you have a good foundation to go in the correct direction. 
            The top image shows the initial options for the tiles that will display the apps the user has purchased and can manage. 
            I explored different navigation and information options. 
            The bottom of the second image in this section shows the page where the user can manage the app with a progress circle to show user capacity and 
            a tile feature for navigation. 
            </>
          }
          images={
            <>
            <img src={ miniLowFi } alt="" />
            </>
          }
          />
        </div> */}
        {/* <div className="section__padding">
          <ArticleL
          title={"Reviews & Revisions"}
          description={
            <>
            After getting feedback on the low fidelity designs, I used the Comcast design library and inspiration from 
            other Comcast pages to create a high fideltity design. Here I got feedback on information hierarchy and alignment. This 
            was a game changer and I have since applied this advice to everything I design (Check the alignment on my portfolio ;D). 
            Additionally, I learned
            more about autoframing and how amazing it is for quick design changes and prototyping. 
            </>
          }
          images={
            <>
            <img src={ miniReviewRevisions } alt="" />

            </>
          }
          />
        </div> */}
        {/* <div className="section__padding">
          <ArticleR
          title={"Prototyping"}
          description={
            <>
            Through prototyping, I was able to show the intentions of my designs and to get feedback on my designs.
            </>
          }
          images={
            <>
            <iframe styles="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="450" src="https://embed.figma.com/proto/HD2BlUNU2KsimbM0YzhJLA/My-Apps?page-id=0%3A1&node-id=1225-5173&node-type=canvas&viewport=214%2C-1314%2C0.04&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=1225%3A5173&embed-host=share" allowfullscreen></iframe>
           
            </>
          }
          />
        </div> */}
        {/* <div className="section__padding">
          <ArticleL
          title={"User Testing"}
          description={
            <>
            My team had a user experience reasearcher and I was fortunate to work with her to conduct user testing for the marketplace designs. 
            We used usertesting.com for 2 rounds of user tests.  First, we set up filters to make sure the people tested were similar to our 
            audience, small to medium business owners. We set a cap of 6 people for the first round. We set up an asynchronous test with 7
            questions using the first prototype. We chose asynchronous so we could see a user interact with the designs without any context or help.
            After those test results came back, I watched the recording and made edits to the prototype based on the feedback. I then changed the 
            questions to be more targeted about features we wanted feedback for. The second round consisted of 7 more users in the test.
            </>
          }
          images={
            <>
            <img src={ logoUserTesting } alt="" />
            </>
          }
          />
        </div>
        <div className="section__padding">
          <ArticleR
          title={"UI Revisions"}
          description={
            <>
            Comcast also has a visual designer! It was great working with him and his feedback greatly helped me to improve my design. 
            His largest piece of feedback was to change the app tile on the dashboard page. Originally, I had designed the dashboard with 4 columns,
            but after working with the visual designer, I changed the design to 2 columns. Following his advice  helped the dashboard 
            fit into the Comcast ecosystem. The images in this section highlight the design features.
            <br/>
            <br/>
            <a href="https://www.figma.com/proto/HD2BlUNU2KsimbM0YzhJLA/My-Apps?page-id=0%3A1&node-id=2786-25963&node-type=canvas&viewport=-2027%2C-10777%2C0.13&t=DNdn62r5zVBiJFm7-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2786%3A25963&show-proto-sidebar=1" target="_blank">
              <button type="button"> View Images </button>
            </a>
            
            </>
          }
          images={
            <>
            <img src={ miniUIRevisions } alt="" />
       
            </>
          }
          />
        </div>
         */}
        {/* <div className="section__padding">
          <ArticleL
          title={"Final Presentation"}
          description={
            <>
            This final presentation is what I presented to execuatives at Comcast. I had the opportunity to present it a couple of times which developed my presenting skills.
            </>
          }
          images={
            <>
            <iframe styles="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="400" src="https://embed.figma.com/proto/HD2BlUNU2KsimbM0YzhJLA/My-Apps?page-id=0%3A1&node-id=1550-38292&node-type=canvas&viewport=214%2C-1314%2C0.04&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=1225%3A5173&embed-host=share" allowfullscreen></iframe>
            </>
          }
          />
        </div>
        <div className="section__padding">
          <CTA 
          title= "Skills Developed"
          description={
            <>
            Alignment, Hierarchy, Auto Framing, User Testing, Presenting
            </>
          }
          />
        </div> */}
      </div>
    </div>    
  )
}

export default Comcast
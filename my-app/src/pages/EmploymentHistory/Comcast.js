import React from 'react'
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import { comcast } from "../../components/brand/imports"
import { Employment } from '../../components';
import { ArticleHead, ArticleL, ArticleR, CTA, Scope } from '../../components';

import miniOriginal from "../../assets/comcast/comcast_mini_original.png";
import miniLowFi from "../../assets/comcast/comcast_mini_lowFi.png";
import miniApproach from "../../assets/comcast/comcast_mini_approach.png";
import miniUIRevisions from "../../assets/comcast/comcast_mini_UIRevisions.png";
import logoUserTesting from "../../assets/logos/logo_usertesting.png";
import miniReviewRevisions from "../../assets/comcast/comcast_mini_ReviewRevisions.png";

function Comcast() {
  return (
    <div>
      <ScrollToHashElement/>
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
      <div className="header">
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
        // teamSize={
        //   <>
        //   3
        //   <a id="MiniMart" />
        //   </>
        //}
        />
      </div>

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
        <div className="section__padding">
          <Scope
          goalText={
            <>
            <ul>
              <li>Develop the My Apps and Manage Apps functionality </li>
              <li></li>
            </ul>
            
            </>
          }
          />          
        </div>
        <div className="section__padding">
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
            <img src={ miniOriginal } id="Evaluate" alt="" />
            </>
          }
          />
        </div>
        <div className="section__padding">
          <ArticleR
          title={"Approach"}
          description={
            <>
            When starting this project, I focused on understanding the current designs and its functionality. Then I
            did a comparative analysis with other marketplaces. For this project, I looked at Microsoft
            365 designs and Adobe Creative Cloud. Throughout this process, I made notes on how to apply what I found and sketched design 
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
        </div>
        
        <div className="section__padding" id="Low">
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
        </div>
        <div className="section__padding">
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
            <img src={ miniReviewRevisions } id="Reviews" alt="" />
            <a id="Prototyping"/>
            </>
          }
          />
        </div>
        <div className="section__padding">
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
            <a id="User"/>
            </>
          }
          />
        </div>
        <div className="section__padding">
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
            <img src={ miniUIRevisions } id="UI" alt="" />
            <a id="Final" />
            </>
          }
          />
        </div>
        
        <div className="section__padding">
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
        </div>
      </div>
    </div>    
  )
}

export default Comcast
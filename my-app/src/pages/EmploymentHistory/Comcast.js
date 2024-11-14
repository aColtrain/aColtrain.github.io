import React from 'react'
import { comcast } from "../../components/brand/imports"
import { Employment } from '../../components';
import { ArticleHead, ArticleL, ArticleR, CTA } from '../../components';

import miniOriginal from "../../assets/comcast/comcast_mini_original.png";
import miniLowFi from "../../assets/comcast/comcast_mini_lowFi.png";
import miniUIRevisions from "../../assets/comcast/comcast_mini_UIRevisions.png";
import logoUserTesting from "../../assets/logos/logo_usertesting.png";
import miniReviewRevisions from "../../assets/comcast/comcast_mini_ReviewRevisions.png";

function Comcast() {
  return (
    <div>
      <div className="header">
        <Employment 
        logo={ comcast }
        logoDescription="Comcast logo" 
        positionDescription="Redesigning a marketplace for SaaS products for small to medium sized businesses. I validated designs
        with Usertesting.com and my designs underwent multiple rounds of feedback with 3 different principal designers." 
        jobTitle="UX Product Designer"
        teamSize="3"
        />
      </div>

      <div className="MiniMart">
        <div className="section__padding">
          <ArticleHead
          title={"MiniMart"}
          description={
            <>
            MiniMart is a eCommerce platform for small to medium sized businesses. <br/>
            <br/>
            Team Size: 3
            </>
          }
          images={
            <>
            <iframe styles="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="350" src="https://embed.figma.com/design/HD2BlUNU2KsimbM0YzhJLA/My-Apps?node-id=113-5242&embed-host=share" allowfullscreen></iframe>
            </>
          
          }
          imageCaption={""}
          />
        </div>
        <div className="section__padding">
          <ArticleR
          title={"Approach"}
          description={
            <>
            When starting this project, I first focused on understanding what the current designs are and the purpose of it. Then I
            do a comparative analysis and figure out other designs that are doing the same thing. For this project, I looked at Microsoft
            365 designs and adobe creative cloud. Throughout this process, I'm making notes on how to apply what i found and sketching design 
            ideas. Then, I look at the design library and start designing screen by screen and seeking feedback along the way. Once I have
            an intial draft I create a prototype and look to get feedback on the functionally. Finally, I'll focus on refining the UI.
            </>
          }
          images={
            <>
            <img src={ "" } alt="" />
            </>
          }
          />
        </div>
        <div className="section__padding">
          <ArticleL
          title={"Evaluationg the Original Design"}
          description={
            <>
            The current UX was indirect and repetitve. When first examining the site, there was no heirarchy of information. There were 7
            navigational links and some of them lead to the same page and other were non functional. <br/>
            <br/>
            The current UI is not consistent with the comcast design aesthetic. 
            </>
          }
          images={
            <>
            <img src={ miniOriginal } alt="" />
            </>
          }
          />
        </div>
        
        <div className="section__padding">
          <ArticleR
          title={"Low Fidelity Designs"}
          description={
            <>
            Low Fidelity deasings are a launching point for the project. They are a quick way to visualize options without spending
            a lot of time on them. The designs get feedback and then you have a good foundation to go into the correct direction. 
            The top image shows the initial options for the tiles that will display the apps the user has purchased and can manage. 
            I explored different navigation options and information options.
            The bottom shows the idea of the page where the user can manage the app. Having a progress circle to show user capacity and 
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
            After getting feedback on the low fidelity designs, I used the design library that my team had and inspriation from 
            other comcast pages to create a high fideltity design. Here I got feedback on information heirarchy and alignment. This 
            was a game changer and I apply this advice to everything I do. Check the alignment on my portfolio ;D. Additionally, I learned
            more about autoframing and how amazing it is for quick design changes and prototyping. 
            </>
          }
          images={
            <>
            <img src={ miniReviewRevisions } alt="" />
            </>
          }
          />
        </div>
        <div className="section__padding">
          <ArticleR
          title={"Prototyping"}
          description={
            <>
            Prototyping served 2 purposes: <br/>
            1. To show the intention of the designs <br/>
            2. To get feedback
            </>
          }
          images={
            <>
            <iframe styles="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="450" src="https://embed.figma.com/proto/HD2BlUNU2KsimbM0YzhJLA/My-Apps?page-id=0%3A1&node-id=1225-5173&node-type=canvas&viewport=214%2C-1314%2C0.04&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=1225%3A5173&embed-host=share" allowfullscreen></iframe>
            </>
          }
          />
        </div>
        <div className="section__padding">
          <ArticleL
          title={"User Testing"}
          description={
            <>
            My team had a User Experience Reasearcher, and I was fortunate to work with her to conduct user testing for the marketplace designs. 
            We used usertesting.com and had 2 rounds of user tests.  First we set up filters to make sure the people tested were similar to our 
            audience, so small to medium business owners. We set a cap of 6 people for the first round. We set up an asyncronous test with 7
            questions using the first prototype. We chose asyncronous so we could see a user interact with the designs without any context or help.
            After those test results came back, i watched the recording and made edits to the prototype based on the feedback and changed the 
            questions to be more targeted about features we wanted feedback for. The second round included 7 more people we tested. 
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
            Comcast also has a visual designer! It was great working with him and I feel like he really stepped up the design. 
            The biggest thing was changing the App tile on the dashboard page. Originally, I had designed the dashboard with 4 columns,
            but after working with the visual designer, the design changed to 2 columns and doing that really helped the dashboard 
            fit into the comcast ecosystem. The images to the left highlight the design features.
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
            The importance of alignment and heirarchy
            The impact of implementing auto framing in making quick adaptive changes to designs 
            </>
          }
          />
        </div>
      </div>
    </div>    
  )
}

export default Comcast
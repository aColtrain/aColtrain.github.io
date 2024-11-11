import React from 'react'
import { comcast } from "../../components/brand/imports"
import { Employment } from '../../components';
import { ArticleHead, ArticleL, ArticleR, CTA } from '../../components';


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
        teamSize="1"
        />
      </div>

      <div className="MiniMart">
        <div className="section__padding">
          <ArticleHead
          title={"MiniMart"}
          description={"MiniMart is a eCommerce platform for small to medium sized businesses. "}
          images={""}
          imageCaption={""}
          />
        </div>
        <div className="section__padding">
          <ArticleR
          title={"Evaluationg the original UI"}
          description={""}
          images={""}
          />
        </div>
        <div className="section__padding">
          <ArticleL
          title={"Approach"}
          description={""}
          images={""}
          />
        </div>
        <div className="section__padding">
          <ArticleR
          title={"Low Fidelity Designs"}
          description={""}
          images={""}
          />
        </div>
        <div className="section__padding">
          <ArticleL
          title={"Reviews & Revisions"}
          description={<></>}
          images={""}
          />
        </div>
        <div className="section__padding">
          <ArticleR
          title={"User Testing"}
          description={<></>}
          images={""}
          />
        </div>
        <div className="section__padding">
          <ArticleL
          title={"UI Revisions"}
          description={<></>}
          images={""}
          />
        </div>
        <div className="section__padding">
          <ArticleR
          title={"Prototyping"}
          description={<></>}
          images={""}
          />
        </div>
        <div className="section__padding">
          <ArticleL
          title={"Final Presentation"}
          description={<></>}
          images={""}
          />
        </div>
        <div className="section__padding">
          <CTA 
          title= "Skills Developed"
          description= "--------"
          />
        </div>
      </div>






      <div className="section__padding">
          <iframe styles="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="650" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FHD2BlUNU2KsimbM0YzhJLA%2FMy-Apps%3Fpage-id%3D0%253A1%26node-id%3D1550-38292%26node-type%3DFRAME%26viewport%3D1981%252C-2945%252C0.04%26t%3DYTI8AKsAX0gYkYWK-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D1550%253A38292" allowfullscreen></iframe>
          <p>key takeaways</p>
          <p>-The importance of alignment and heirarchy</p>
          <p>- The impact of implementing auto framing in making quick adaptive changes to designs </p>
      </div>
      
    </div>    
  )
}

export default Comcast
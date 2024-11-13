import React from 'react'
import { comcast } from "../../components/brand/imports"
import { Employment } from '../../components';
import { ArticleHead, ArticleL, ArticleR, CTA } from '../../components';

import miniOriginal from "../../assets/comcast/comcast_mini_original.png";
import miniLowFi from "../../assets/comcast/comcast_mini_lowFi.png";
import miniUIRevisions from "../../assets/comcast/comcast_mini_UIRevisions.png";
import logoUserTesting from "../../assets/logos/logo_usertesting.png";


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
            <img width="100%" src= {miniOriginal} />
            </>
          
          }
          imageCaption={""}
          />
        </div>
        <div className="section__padding">
          <ArticleR
          title={"Evaluationg the original UI"}
          description={""}
          images={
            <>
            <img src={ miniOriginal } alt="" />
            </>
          }
          />
        </div>
        <div className="section__padding">
          <ArticleL
          title={"Approach"}
          description={""}
          images={
            <>
            <img src={ "" } alt="" />
            </>
          }
          />
        </div>
        <div className="section__padding">
          <ArticleR
          title={"Low Fidelity Designs"}
          description={""}
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
          description={<></>}
          images={
            <>
            <img src={ "" } alt="" />
            </>
          }
          />
        </div>
        <div className="section__padding">
          <ArticleR
          title={"User Testing"}
          description={<></>}
          images={
            <>
            <img src={ logoUserTesting } alt="" />
            </>
          }
          />
        </div>
        <div className="section__padding">
          <ArticleL
          title={"UI Revisions"}
          description={<></>}
          images={
            <>
            <img src={ miniUIRevisions } alt="" />
            </>
          }
          />
        </div>
        <div className="section__padding">
          <ArticleR
          title={"Prototyping"}
          description={<></>}
          images={
            <>
            <iframe styles="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="450" src="https://embed.figma.com/proto/HD2BlUNU2KsimbM0YzhJLA/My-Apps?page-id=0%3A1&node-id=1225-5173&node-type=canvas&viewport=507%2C-3814%2C0.05&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1225%3A5173&show-proto-sidebar=1&embed-host=share" allowfullscreen></iframe>
            </>
          }
          />
        </div>
        <div className="section__padding">
          <ArticleL
          title={"Final Presentation"}
          description={<></>}
          images={
            <>
            <img src={ "" } alt="" />
            </>
          }
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
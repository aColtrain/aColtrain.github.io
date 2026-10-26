import React from 'react'
import { Employment, EyebrowHeader } from '../../components';

function WildlifeCards() {
  return (
    <div>
        <div>
            <Employment 
            eyebrow={"Information Design & Visual Storytelling"}
            name= {"Museum Wildlife Information Cards"}
            logo={ <></> }
            logoDescription="" 
            positionDescription={
                <>
                Designed a series of educational bird cards for a museum workshop exploring how holo supports bird survival.
                The double sided cards pair striking wildlife imagery with species-specific information, encouraging participation to observe the details of bird and their environments.
                </>
                }
            employer=""
            jobTitle=""
            deliverables=""
            tools=""
            />
        </div>
        <div className="section__padding">
          <EyebrowHeader
          eyebrow={"Design Approach"}
          title={"Encouraging Closer Observation"}
          />
          <ul>
            <li><p>Focused Imagery: Used blurred backgrounds to bring each bird's coloration, features, and plumage into focus.</p></li>
            <li><p>Geometric Exploration: Layered circular forms over the photography to highlight the shapes and visual patterns found in each bird.</p></li>
            <li><p>Educational Storytelling: Paired each bird's image with information about its behavior, coloration, and survival ont he reverse side.</p></li>
            <li><p>Feather Details: Featured an image of each bird's feather alongside its species information, adding a closer look at the plumage discussed in the workshop.</p></li>
          </ul>
        </div>

    </div>
  )
}

export default WildlifeCards
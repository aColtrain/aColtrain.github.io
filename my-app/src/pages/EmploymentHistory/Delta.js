import React from 'react'
import { Employment, ArticleHead, ArticleL, ArticleR, CTA, Scope, ArticleInfo } from '../../components';
import deltaLogo from '../../assets/logos/logo_delta_large.png';
function Delta() {
  return (
    <div>
        <div>
            <Employment 
            name={"Delta Air Lines"}
            logo={ <img src={ deltaLogo } alt="" /> }
            positionDescription={
                <>
            
                </>
            } 
            employer={""}
            jobTitle="UX/UI Co-Op Intern"
            deliverables="Website"
            tools="Figma, Axure RP, Adobe XD"
            teamSize={
                <>
                9
                <a id="MediaBridge" />
                </>
            }
            />
        </div>
        <div>
            <ArticleInfo
            title={"Skypro UI"}
            description={
                <>
                By producing the first design system at the In-Flight Technologies team, we streamlined the design process set the foundation for all
                6 apps we supported.
                </>
            }
            category={"Design System"}
            deliverables={""}
            imgs={
                <>
                <div className="">
                    <img src={""}/>
                    <img src={""}/>
                </div>
                </>
            }
            />     
        </div>
        <div>
            <ArticleInfo
            title={"Meal Manifesting"}
            description={
                <>
                Designed a system that allowed flight attendants to recieve custom pre-order information, log meal orders, and track meal inventory. 
                </>
            }
            category={"UX/UI Design"}
            deliverables={""}
            imgs={
                <>
                <div className="">
                    <img src={""}/>
                    <img src={""}/>
                </div>
                </>
            }
            />     
        </div>
        <div>
            <ArticleInfo
            title={"Video Demos"}
            description={
                <>
                An initiative to have short form video content for 28,000+ flight attendants to become familiar with what resources they have in their devices for managing a flight.
                </>
            }
            category={"UX/UI Design"}
            deliverables={""}
            imgs={
                <>
                <div className="">
                    <img src={""}/>
                    <img src={""}/>
                </div>
                </>
            }
            />     
        </div>
    </div>
  )
}

export default Delta
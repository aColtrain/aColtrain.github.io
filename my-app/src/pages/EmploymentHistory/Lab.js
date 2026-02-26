import React from 'react'
import { Employment, ArticleHead, ArticleL, ArticleR, CTA, Scope, ArticleInfo, Feature} from '../../components';
import { Footer, Blog, Possibility, Skills, WhatGPT3, Header, ProjectThumbnails, Aboutme, GraphicDesignCollage } from '../../containers';
import deltaVideoLanding from '../../assets/delta_videodemo_landing.png';
function Lab() {
  return (
    // <div className="section__padding background-grid">
    <div className="">
        <div className="section__padding">
            <h1>Lab</h1>
            <img src={ deltaVideoLanding } />
            <div className="column2">
                <div className="column2_div">
                    <h2>Delta Air Lines | Rapid Stakeholder Visualization</h2>
                    <p>
                        Produced as a rapid-turnaround internal deliverable to align stakeholders on new passenger flows. To meet tight deadlines with zero departmental budget, I leveraged lean production tools including iMovie and open-source teleprompting software to deliver a functional, high-impact narrative demo.
                    </p>
                </div>
                <div className="column2_div">

                    <Feature title='Teleprompting' text='Open-Source Teleprompter Web Tool'/>
                    <Feature title='Audio' text='iPhone Voice Memo'/>
                    <Feature title='Editing' text='iMovie'/>
                    <Feature title='Result' text='Successful stakeholder alignment and a blueprint for the final in-flight flow'/>
                    {/* <Feature title='Stack' text='iMovie, Open-Source Teleprompter, Figma (for assets)'/> */}
                </div>
                
            </div>
            

            
        </div>
        {/* <div>
            <h2>Commercial Motion Hero</h2>
            <p>Since you were paid by a major brand like Delta, this work needs the most visual weight.

The Look: A large, edge-to-edge video player at the top of the page.

The Detail: Use a side-panel description that explains you were a Delta Intern and produced this to visualize passenger flows for internal stakeholders.

The Tech: Mention the tools used (e.g., After Effects, Premiere, or Figma Motion).</p>
        </div> */}
        <div className="section__padding">
            <h2>Design + Development Bento Grid</h2>
        </div>
        {/* <ProjectThumbnails /> */}
        <div className="section__padding">
            <h2>Tech Sketches Graphic Design</h2>
            <GraphicDesignCollage />
        </div>
    </div>
  )
}

export default Lab
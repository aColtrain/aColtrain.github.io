import React from 'react'
import { ArticleHead, ArticleL, ArticleR, CTA, Scope, Employment } from '../../components';
import demo from '../../assets/delta_demo.png';
import demoFilming from '../../assets/delta_demo_filming.png';
import demoEditing from '../../assets/delta_demo_editing.png';
function VideoDemo() {
  return (
    <div className="Video Demos">
        <Employment 
        name= { "Video Demos"}
        logo={ <></> }
        logoDescription="Delta Air lines logo" 
        positionDescription={
            <>
            6 video demos were made as an initiative to have short form video content for 28,000+ flight attendants to
            become familiar with what resources they have in their devices for managing a flight. The demos were 
            also used for upper management communications.
            </>
            }
        employer="Delta Air Lines"
        jobTitle="UX/UI Designer"
        deliverables="Videos"
        tools="Microsoft Word, teleprompter-online.com, iPhone, mini microphones, voice record, iMovie"
        teamSize={
            <>
            1-4
            <a id="SkyPro"/>
            </>
        }
        impact1="Team Impact"
        impact1List=""
        impact2="Products Impact"
        impact2List=""
        />
        {/* <div className="section__padding">
            <ArticleHead
            title={"Video Demos"}
            description={
                <>
                Video Demos were made as an initiative to have short form video content for flight attendants to know what resources they 
                have in their devices for managing a flight and to help upper management get a quick grasp on the role the In-Flight Technology 
                Team plays.
                <br/>
                <br/>
                Team Size: 2
                </>
            }
            images={
                <>
                <img src={ demo } alt="" />
                </>
            }
            imageCaption={
                <>
                </>
            } 
            />
        </div> */}
        <div className="section__padding">
        <ArticleR
            title="Script"
            description={
                <>
                I met with the product owners of all the apps that my team supported to talk about what they wanted to highlight in each of 
                the video demos. 
                After creating a draft of each script, I made a rough draft of my idea for the structure of the videos. I used text to speech 
                software, a stock image, and screenshots to create a first draft of the videos. This video puts the rough in rough draft, but 
                it gets the job done. 
                I learned that the scenes with the screenshots would be better as a voice over. Having a voice over would allow realestate for 
                bullet points to better highlight the features of the apps in a visual way. 

                </>
            }
            images={
                <>
                <iframe
                width="100%" 
                height="300"
                src='https://www.youtube.com/embed/_I8Rd_ks-so'
                frameborder='0'
                allow='encrypted-media'
                allowfullscreen
                title='First Draft'
                />

                {/* <img src={ demoScript } alt="" />  */}
                </>
            }
            />
        </div>
        <div className="section__padding">
            <ArticleL
            title={"Filming"}
            description={
                <>
                When filming, we used a member of the In-Flight Services team, Anthony, who also was a flight attendant as the actor. We scheduled a full 
                day of filming where Anthony wore his flight attendant uniform. On that day, we used the inside of one of the training planes as 
                a set. I brought my tripod and set up a wearable microphone. We then recorded the intro and outro for all six videos. 
                Due to having only one day in Anthony's schedule to film and limited time for him to memorise the script, I used teleprompter
                software to display the script. We had set the laptop with thesoftware on a seat and filmed. However, it was obvious that he was reading
                something. To mitigate this, I propped my computer on a stool and some boxes I had found around the room. After filming the intros 
                and outros, we then recorded the voice overs for the features demo.
                </>
            }
            images={
                <>
                <img src={ demoFilming } alt="" />
                </>
            }
        />
        </div>
        <div className="section__padding">
            <ArticleR
            title={"Editing"}
            description={
                <>
                To edit the demos, I used the iMovie software. I started by editing one full video with our recorded material and presenting 
                that for review. After recording and editing everything, there ended up being a change of script where we weren't allowed to say 'I'm 
                Anthony and I'm a Delta Flight Attendant.' This was hard to work around due to the way Anthony's inflection was when he was 
                talking and our time constraints. For the voiceover parts, I used screenshots and screen 
                recordings of the existing apps and made a powerpoint that included the bulleted points. Those slides were then imported into 
                iMovie and edited to be in time to the voiceover. 
                </>
            }
            images={
                <>
                <img src={ demoEditing } alt="" />
                </>
            }
            />
        </div>
        <div className="section__padding">
            <ArticleL
            title={"Final"}
            description={
                <>
                I produced 6 videos 1-2 minutes long. Given the quick turnaround and last minute changes to the script, I am not as happy 
                as I could be with the results, however I am proud of myself for being able to adapt to the circumstances. <br/><br/>
                View the playlist of all the demos on <a href='https://www.youtube.com/playlist?list=PL8e45rsI4i0u__uX-P0y0dwmMXweE8gq0' className="underline">YouTube</a>.
                </>
            }
            images={
                <>
                <iframe
                width="100%" 
                height="300"
                src='https://www.youtube.com/embed/oqoDtynXY_w'
                frameborder='0'
                allow='encrypted-media'
                allowfullscreen
                title='Flight Family Final Draft'
                />
                </>
            }
            />
        </div>
        <div className="section__padding" id="Banner">
            <CTA 
            title= "Skills Developed"
            description= "Production management, Problem solving, Filming, Video Editing"
            />
        </div>
    </div>
  )
}

export default VideoDemo
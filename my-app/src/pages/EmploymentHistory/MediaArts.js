import React from 'react'
import { Employment } from '../../components';
import { ArticleHead, ArticleL, ArticleR, CTA } from '../../components';
import logoMA from '../../assets/logos/logo_media_arts_large.png';


function MediaArts() {
  return (
    <div>
        <div className="header">
            <Employment 
            logo={ logoMA }
            logoDescription="Media Arts logo" 
            positionDescription="LAKSKJKOFJIOSJIDOJISDJI." 
            jobTitle="University Project Manager"
            teamSize="8"
            impact1="Team Impact"
            impact1List=""
            impact2="Products Impact"
            impact2List=""
            />
        </div>
        <div className="MediaBridge"> 
            <div className="section__padding">
                <ArticleHead
                title="Sustainablilty Media Bridge Project"
                description={
                    <>
                    </>
                }
                images={
                    <>
                    </>
                }
                imageCaption={""}
                />

            </div>
        </div>

        <div className="BirdGraphics">
            <div className="section__padding">
            <ArticleHead
                title="Bird Information Cards & Poster"
                description={
                    <>

                    </>
                }
                images={
                    <>
                    
                    </>
                }
                imageCaption={""}
                />
            </div>

        </div>
    </div>
  )
}

export default MediaArts
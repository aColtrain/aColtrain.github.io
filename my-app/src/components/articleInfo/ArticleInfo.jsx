import React from 'react';
import './articleInfo.css';
import { Feature } from '..';

const ArticleInfo = ({title, description, category, deliverables, imgs}) => {
  return (
    <div className="section__padding articleI">
        <div className="article-info">
            <div className="articleI__title">
                <h1>{ title }</h1>
            </div>
            <div className="articleI__description">
                <div>
                    <p>{ description }</p>
                </div>
            <div>
                    <Feature title="Category" text={ category }/>
                    <Feature title="Deliverables" text={ deliverables }/>
            </div>
            </div>
        </div>
        <div className="articleI__imgs">
            {imgs}
        </div>
        {/* <div className="employment__name">
          <h1 className="gradient__text"> { title } </h1>
          <div className="employment__description">
            <p>{description}</p> 
          </div>
        </div>
        
        <div className="employment__team-container">
          
          <div className="container">
            <Feature title="Category" text={ category }/>
            <Feature title="Deliverables" text={ deliverables }/>
            <Feature title="Team Size" text={ teamSize } />
          </div>
        </div> */}
    </div>
  )
}

export default ArticleInfo
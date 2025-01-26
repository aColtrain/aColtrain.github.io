import React from 'react';
import './articleInfo.css';
import { Feature } from '..';

const ArticleInfo = ({title, description, category, deliverables}) => {
  return (
    <div className="article-info">
        <div>
            <h1>{ title }</h1>
        </div>
        <div>
            <div>
                <p>{ description }</p>
            </div>
           <div>
                <Feature title="Category" text={ category }/>
                <Feature title="Deliverables" text={ deliverables }/>
           </div>
        </div>
    </div>
  )
}

export default ArticleInfo
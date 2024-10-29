import React from 'react';
import './articleR.css';

const ArticleR = ({ title, description, images }) => {
  return (
    <div>
      <div className="article-right">
        <div className="article__image">
          <img src={ images } alt="example" />
        </div>
        
        <div className="article__description">
          <h1 className="gradient__text">{ title }</h1>
          <p>{ description }</p>
        </div>
        
      </div>
      
      
    </div>
  )
}

export default ArticleR
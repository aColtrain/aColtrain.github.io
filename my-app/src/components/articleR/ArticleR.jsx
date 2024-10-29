import React from 'react';
import './articleR.css';

const ArticleR = ({ title, description, images }) => {
  return (
    <div>
      <div className="article-right">
          <div>
            <h1>{ title }</h1>
            <p>{ description }</p>
          </div>
          <img> { images } </img>
        </div>
      
      
    </div>
  )
}

export default ArticleR
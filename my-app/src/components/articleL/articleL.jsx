import React from 'react';
import './articleL.css';

const ArticleL = ({ title, description, images }) => {
  return (
    <div className="article-left">
      <div className="articleL__description">
        <h1 className="gradient__text">{ title }</h1>
        <p>{ description }</p>
      </div>
      <div className="articleL__image">
        {/* <img src={ images } alt="" /> */}
        { images }
      </div>
    </div>
  )
}

export default ArticleL
import React from 'react';
import './articleHead.css';

const ArticleHead = ({title, description, images}) => {
  return (
    <div className="article-Head">
      <div className="article__description">
        <h1 className="gradient__text">{ title }</h1>
        <p>{ description }</p>
      </div>
      <div className="article__image">
        <img src={ images } alt="example" />
      </div>
  </div>
  )
}

export default ArticleHead
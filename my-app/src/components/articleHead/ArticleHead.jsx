import React from 'react';
import './articleHead.css';

const ArticleHead = ({title, description, images, imageCaption }) => {
  return (
    <div className="article-Head">
      <div className="articleHead__description">
        <h1 className="gradient__text">{ title }</h1>
        <p>{ description }</p>
      </div>
      <div className="articleHead__image">
        {/* <img src={ images } alt="example" /> */}
        {images}
        <p>{ imageCaption }</p>
      </div>
  </div>
  )
}

export default ArticleHead
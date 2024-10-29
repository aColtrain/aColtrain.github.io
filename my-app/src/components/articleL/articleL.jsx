import React from 'react';
import 'articleL.css';

const ArticleL = ({ title, description, images }) => {
  return (
    <div className="article-left">
        <div>
        <h1>{ title }</h1>
        <p>{ description }</p>
        </div>
        <img> { images } </img>
    </div>
  )
}

export default ArticleL
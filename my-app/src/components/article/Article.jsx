import React from 'react';
import './article.css';

const Article = ({title, description}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default Article
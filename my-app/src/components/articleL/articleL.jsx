import React from 'react'

const ArticleL = ({ title, description, images }) => {
  return (
    <div className="article-right">
        <div>
        <h1>{ title }</h1>
        <p>{ description }</p>
        </div>
        <img> { images } </img>
    </div>
  )
}

export default articleL
import React from 'react';

const NewsCard = ({ article }) => {
  const { title, description, urlToImage, url } = article;

  return (
    <div className="news-card">
      <img src={urlToImage} alt="News" />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
};

export default NewsCard;



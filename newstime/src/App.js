import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import NewsCard from './components/NewsCard';
import Footer from './components/Footer';

const API_KEY = 'a393f4ca68484426a5f0946b3b72a7fe';  // Replace with your API key from newsapi.org
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching news articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="App">
      <Header />
      <Navigation />
      <div className="news-cards">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;

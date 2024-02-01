import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Stats from './components/Stats/Stats';
import Thoughts from './components/Thoughts/Thoughts';
import Changelog from './components/Changelog/Changelog';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    document.title = `${currentPage}`;
  }, [currentPage]);

  const switchPage = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return < Home />;
      case 'about':
        return <About />;
      case 'stats':
        return <Stats />;
      case 'thoughts':
        return <Thoughts />;
      case 'changelog':
        return <Changelog />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Header switchPage={switchPage} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;

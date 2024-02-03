import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Stats from './components/Stats/Stats';
import Thoughts from './components/Thoughts/Thoughts';
import Resources from './components/Resources/Resources';
import Changelog from './components/Changelog/Changelog';
import './App.css';

const App = () => {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Home;
      break;
    case "/about":
      Component = About;
      break;
    case "/stats":
      Component = Stats;
      break;
    case "/thoughts":
      Component = Thoughts;
      break;
    case "/resources":
      Component = Resources;
      break;
    case "/changelog":
      Component = Changelog;
      break;
  };

  return (
    <div className="pageWrapper">
      <div><Header /></div>
      <div className="component"><Component /></div>
      <div><Footer /></div>
    </div>
  );
};

export default App;

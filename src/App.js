import React from 'react';
import {Route, Routes} from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Stats from './components/Stats/Stats';
import Thoughts from './components/Thoughts/Thoughts';
import Resources from './components/Resources/Resources';
import SiteCollection from './components/Resources/SiteCollection/SiteCollection';
import Todo  from './components/Todo/Todo'
import Changelog from './components/Changelog/Changelog';
import './App.css';

const App = () => {
  return (
    <div className="pageWrapper">
      <div><Header /></div>
      <div className="component">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/thoughts" element={<Thoughts />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/site-collection" element={<SiteCollection />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </div>
      <div><Footer /></div>
    </div>
  );
};

export default App;

import React, {useState} from 'react';
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
import UnderConstruction from './components/UnderConstruction/UnderConstruction';
import Mobile from './components/Mobile/Mobile';
import CursorMenu from './components/CursorMenu/CursorMenu';
import './App.css';

const App = () => {
    const [selectedCursor, setSelectedCursor] = useState(() => {
        return (
            //localStorage.getItem('selectedCursor') ||
            'default');
    });

    const handleCursorChange = (cursor) => {
        setSelectedCursor(cursor);
        //localStorage.setItem('selectedCursor', cursor);
        document.documentElement.style.cursor = cursor;

        if (cursor !== 'default') {
            document.documentElement.classList.add('custom-cursor');
        } else {
            document.documentElement.classList.remove('custom-cursor');
        }
    };


    const cursorOptions = [
        {label: 'default', value: 'default'},
        { label: 'rafis hddt', value: 'url(/cursors/rafishddt.png), auto' },
        { label: 'zeeqplus1', value: 'url(/cursors/zeeqplus1.png), auto' },
        { label: 'plus', value: 'url(/cursors/plus.png), auto' },

    ]

    return (
        <div className="pageWrapper" style={{cursor: selectedCursor}}>
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
                    <Route path="/oops" element={<UnderConstruction />} />
                    <Route path="/mobile" element={<Mobile />} />
                </Routes>
            </div>
            <div>
                <Footer cursorMenu={<CursorMenu options={cursorOptions} onSelect={handleCursorChange}/>} />
            </div>
        </div>
    );
};

export default App;

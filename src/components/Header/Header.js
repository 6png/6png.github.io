import React from 'react'
import NavBar from './NavBar'

import "./Header.css"

const Header = () => {
    return (
        <header>
            <div className="headerContent">
                <h2><a href="/" id="site-name">is's ssd soup</a></h2>
                <hr id="headerHr"></hr>
                <NavBar />
            </div>
        </header>
    );
};

export default Header;
import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <header>
            <h2><a href="/" id="site-name">is's ssd soup</a></h2>
            <hr></hr>
            <nav>
                <a href="about">about</a>
                <a href="stats">stats</a>
                <a href="thoughts">thoughts</a>
                <a href="resources">resources</a>
            </nav>
        </header>
    );
};

export default Header;
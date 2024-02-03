import React from 'react';
import './Header.css';
const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><a href="about">about</a></li>
                <li><a href="stats">stats</a></li>
                <li><a href="thoughts">thoughts</a></li>
                <li><a href="resources">resources</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
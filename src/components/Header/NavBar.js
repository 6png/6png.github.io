import React from 'react';
import {Link} from "react-router-dom";
import './Header.css';
const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/stats">stats</Link></li>
                <li><Link to="/thoughts">thoughts</Link></li>
                <li><Link to="/resources">resources</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
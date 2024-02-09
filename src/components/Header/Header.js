import React from 'react';
import {Link} from "react-router-dom";
import NavBar from './NavBar'

import "./Header.css"

const Header = () => {
    return (
        <header>
            <div className="headerContent">
                <h2>
                    <Link to="/" id="site-name">is's ssd soup</Link>
                </h2>
                <hr id="headerHr"></hr>
                <NavBar />
            </div>
        </header>
    );
};

export default Header;
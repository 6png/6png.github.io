import React from 'react'
import {Link} from 'react-router-dom';
import './Footer.css';

const Footer = ({cursorMenu}) => {
    return (
        <footer>
            <div className="footerContent">
                <div className="links">
                    <Link to="todo">todo</Link>
                    <Link to="changelog">changelog</Link>
                </div>
                <div className="bottom">
                    {cursorMenu}
                    <p>&copy; 2024 i666666i &lt;3</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
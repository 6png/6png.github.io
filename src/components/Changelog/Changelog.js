import React from 'react'
import { changelogUpdates } from '../updates.js';
import './Changelog.css'

const generateChangelogEntries = () => {
    return changelogUpdates.map(([date, message], index) => (
        <article key={index} className="changelogEntry">
            <h4 className="date">{date}</h4>
            <p className="message">{message.split('\n').map((line, lineIndex) => (
                <React.Fragment key={lineIndex}>
                    {line}
                    {lineIndex !== message.split('\n').length - 1 && <br />}
                </React.Fragment>
            ))}</p>
        </article>
    ));
};

const Changelog = () => {
    return (
        <div className="changelogWrapper">
            <div className="changelogContent">
                <h3 className="changelogTitle">changelog</h3>
                <p>-------------------------------------------------------------------------------</p>
                <div className="changelogEntries">
                    {generateChangelogEntries()}
                </div>
            </div>
            
        </div>
    );
};

export default Changelog;
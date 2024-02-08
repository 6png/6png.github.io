import React from 'react'
import { changelogUpdates } from '../updates.js';
import './Changelog.css'

const generateChangelogEntries = () => {
    return changelogUpdates.map(([date, message], index) => (
        <article key={index} className="changelogEntry">
            <h4 className="date">{date}</h4>
            <p className="message">{message}</p>
        </article>
    ));
};

const Changelog = () => {
    return (
        <div className="changelogWrapper">
            <div className="changelogContent">
                <h4 className="changelogTitle">changelog</h4>
                <p>-----------------------------------------------------------------------------</p>
                <div className="changelogEntries">
                    {generateChangelogEntries()}
                </div>
            </div>
        </div>
    );
};

export default Changelog;
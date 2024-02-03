import React from 'react'
import './Changelog.css'

const Changelog = () => {
    return (
        <div className="changelogWrapper">
            <div className="changelogContent">
                <h3 className="changelogTitle">changelog</h3>
                <p>-------------------------------------------------------------------------------</p>
                <div className="changelogEntries">
                    <article className="changelogEntry">
                        <h4 className="date">02/03/24</h4>
                        <p className="message">
                            Made 'about' layout and added content in 'about' sections (site, noodle, corpus);<br></br>
                            Made 'changelog' layout;
                        </p>
                    </article>
                    <article className="changelogEntry">
                        <h4 className="date">XX/XX/XX</h4>
                        <p className="message">
                            more text
                        </p>
                    </article>
                </div>
                
            </div>
            
        </div>
    );
};

export default Changelog;
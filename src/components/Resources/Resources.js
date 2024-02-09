import React from 'react';
import './Resources.css';

const Resources = () => {
    return (
        <div className="resourcesWrapper">
            <div className="resourcesCard top">
                <img src="/images/jellyfishcute.gif" alt="jellyfish gif"></img>
                <p className="contentText">
                    <b>soup</b>
                </p>
            </div>
            <div className="resourcesContentCards">
                <div className="resourcesCard">
                    <h4 className="contentText resourcesCardTitle">tools</h4>
                    <hr className="resourcesCardHr"></hr>
                    <ul>
                        <li><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">visual
                            studio code</a>
                            <br></br>rich text editor (started here)
                        </li>
                        <li><a href="https://www.jetbrains.com/webstorm/" target="_blank"
                               rel="noopener noreferrer">webstorm</a>
                            <br></br>ide (moved here)
                        </li>
                    </ul>
                </div>
                <div className="resourcesCard">
                    <h4 className="contentText resourcesCardTitle">learn</h4>
                    <hr className="resourcesCardHr"></hr>
                    <ul>
                        <li><a href="https://theodinproject.com" target="_blank" rel="noopener noreferrer">the odin
                            project</a></li>
                    </ul>
                </div>
                <div className="resourcesCard">
                    <h4 className="contentText resourcesCardTitle">inspo</h4>
                    <hr className="resourcesCardHr"></hr>
                    <ul>
                        <li>
                            <a href="/resources/site-collection" target="_blank" rel="noopener noreferrer">site
                                collection</a>
                            <br></br>permanent bookmarks and a to-explore list, with notes
                        </li>
                    </ul>
                </div>
                <div className="resourcesCard">
                    <h4 className="contentText resourcesCardTitle">references</h4>
                    <hr className="resourcesCardHr"></hr>
                    <ul>
                        <li>
                            <a href="https://conventionalcommits.org/" target="_blank" rel="noopener noreferrer">
                                conventional commits</a>
                            <br></br>style guide for git commits
                        </li>
                    </ul>
                </div>
                <div className="resourcesCard">
                    <h4 className="contentText resourcesCardTitle">external content</h4>
                    <hr className="resourcesCardHr"></hr>
                    <ul>
                        <li><a href="" target="_blank" rel="noopener noreferrer">images</a></li>
                        <li>gifs
                            <ul>
                                <li><a href="" target="_blank" rel="noopener noreferrer">hehe</a></li>
                            </ul>
                        </li>
                        <li>scripts
                            <ul>
                                <li><a href="" target="_blank" rel="noopener noreferrer">oneko</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="resourcesCard top">
                <img src="/images/jellyfishcute.gif" alt="jellyfish gif"></img>
                <p className="contentText">
                    <b>other</b>
                </p>
            </div>
            <div className="resourcesContentCards">
                <div className="resourcesCard">
                    <h4 className="contentText resourcesCardTitle">aim</h4>
                    <hr className="resourcesCardHr"></hr>
                    <ul>
                        <li><a
                            href="https://docs.google.com/spreadsheets/d/1A59_tHSMtGpLwcdQaR5GmJ9EjxgPAga9q3k9MYMJ7KM/edit?usp=sharing"
                            target="_blank" rel="noopener noreferrer">
                            benchmark collection</a>
                        </li>
                        <li>
                            <a href="https://store.steampowered.com/app/824270/KovaaKs/" target="_blank"
                               rel="noopener noreferrer">kovaaks</a>
                        </li>
                        <li>
                            <a href="https://store.steampowered.com/app/1100990/Aimbeast/" target="_blank"
                               rel="noopener noreferrer">aimbeast</a>
                        </li>
                        <li>
                            <a href="https://store.steampowered.com/app/714010/Aimlabs/" target="_blank"
                               rel="noopener noreferrer">aimlabs</a>
                        </li>
                        <li>
                            <a href="https://github.com/helloimxtal/BallSheetOGL" target="_blank"
                               rel="noopener noreferrer">ballsheetogl</a>
                        </li>
                        <li>
                            <a href="https://aim400kg.com" target="_blank" rel="noopener noreferrer">aim400kg</a>
                        </li>

                    </ul>
                </div>
                <div className="resourcesCard">
                    <h4 className="contentText resourcesCardTitle">program</h4>
                    <hr className="resourcesCardHr"></hr>
                    <ul>
                        <li>
                            <a href="https://app.hackthebox.com/" target="_blank" rel="noopener noreferrer">hack the
                                box</a>
                            <br></br>interactive cybersec tutorials
                        </li>
                        <li>
                            <a href="https://learngitbranching.js.org" target="_blank" rel="noopener noreferrer">learn
                                git branching</a>
                            <br></br>interactive git tutorials
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Resources;
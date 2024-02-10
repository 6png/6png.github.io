import React from 'react';
import {Link} from 'react-router-dom';
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
                    <h4 className="contentText resourcesCardTitle">use</h4>
                    <hr className="resourcesCardHr"></hr>
                    <ul>
                        <li>
                            <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">visual
                            studio code</a>
                            <br></br>rich text editor (started here)
                        </li>
                        <li>
                            <a href="https://www.jetbrains.com/webstorm/" target="_blank"
                               rel="noopener noreferrer">webstorm</a>
                            <br></br>ide (moved here)
                        </li>
                        <li>
                            <a href="https://namecheap.com/" target="_blank"
                               rel="noopener noreferrer">namecheap</a>
                            <br></br>domain registrar
                        </li>
                        <li>
                            <a href="https://pages.github.com" target="_blank"
                               rel="noopener noreferrer">github pages</a>
                            <br></br>free hosting for static sites
                        </li>
                        <li>
                            <a href="https://www.contentful.com/" target="_blank"
                               rel="noopener noreferrer">contentful</a>
                            <br></br>free cms with good documentation and flexible api
                        </li>
                    </ul>
                </div>
                <div className="resourcesCard">
                    <h4 className="contentText resourcesCardTitle">learn + reference</h4>
                    <hr className="resourcesCardHr"></hr>
                    <ul>
                        <li><a href="https://theodinproject.com" target="_blank" rel="noopener noreferrer">the odin
                            project</a>
                            <br></br>ground-up course on web dev
                        </li>
                        <li>
                            <a href="https://conventionalcommits.org/" target="_blank" rel="noopener noreferrer">
                                conventional commits</a>
                            <br></br>style guide for git commits
                        </li>
                        <li>
                            <a href="https://chat.openai.com/" target="_blank"
                               rel="noopener noreferrer">chatgpt</a>
                            <br></br>stackoverflow replacement
                        </li>
                    </ul>
                </div>
                <div className="resourcesCard">
                    <h4 className="contentText resourcesCardTitle">inspire</h4>
                    <hr className="resourcesCardHr"></hr>
                    <ul>
                        <li>
                            <Link to="/resources/site-collection">personal site
                                collection</Link>
                            <br></br>permanent bookmarks and a to-explore list, with notes
                        </li>
                    </ul>
                </div>
                <div className="resourcesCard">
                    <h4 className="contentText resourcesCardTitle">link</h4>
                    <hr className="resourcesCardHr"></hr>
                    <ul>
                        <li><Link to='/oops'>images</Link></li>
                        <li>gifs
                            <ul>
                                <li><Link to='/oops'>hehe</Link></li>
                            </ul>
                        </li>
                        <li>scripts
                            <ul>
                                <li><Link to='/oops'>asfsaf</Link></li>
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
                            <br></br>cybersec tutorials
                        </li>
                        <li>
                            <a href="https://exercism.org/" target="_blank" rel="noopener noreferrer">
                               exercism</a>
                            <br></br>babies' leetcode
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Resources;
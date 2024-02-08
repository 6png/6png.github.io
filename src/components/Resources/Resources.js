import React from 'react';
import './Resources.css';

const Resources = () => {
    return (
        <div className="resourcesWrapper">
            <div className="resourcesCard top">
                <img src="/images/jellyfishcute.gif"></img>
                <p className="contentText">
                    <b>soup</b>
                </p>
            </div>
            <div className="resourcesContentCards">
                <div className="resourcesCard">
                    <h4 className="contentText">tools</h4>
                    <p className="contentText">
                        ------------------------------------------------
                    </p>
                    <ul>
                        <li><a href="https://code.visualstudio.com/">visual studio code</a>
                            <br></br>this is the only text editor i use for html/css/js
                        </li>
                    </ul>
                </div>
                <div className="resourcesCard">
                    <h4 className="contentText">learn</h4>
                    <p className="contentText">
                        ------------------------------------------------
                    </p>
                    <ul>
                        <li><a href="https://theodinproject.com">the odin project</a></li>
                    </ul>
                </div>
                <div className="resourcesCard">
                    <h4 className="contentText">external content</h4>
                    <p className="contentText">
                        ------------------------------------------------
                    </p>
                    <ul>
                        <li><a href="">images</a></li>
                        <li>gifs
                            <ul>
                                <li><a>hehe</a></li>
                            </ul>
                        </li>
                        <li>scripts
                            <ul>
                                <li><a>oneko</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="resourcesCard">
                    <h4 className="contentText">design inspo</h4>
                    <p className="contentText">
                        ------------------------------------------------
                    </p>
                    <ul>
                        <li>
                            <a href="/resources/site-collection">site collection</a>
                            <br></br>permanent bookmarks and a to-explore list, with notes
                        </li>
                    </ul>
                </div>
            </div>

            <div className="resourcesCard top">
                <img src="/images/jellyfishcute.gif"></img>
                <p className="contentText">
                    <b>other</b>
                </p>
            </div>
            <div className="resourcesContentCards">
                <div className="resourcesCard">
                    <h4 className="contentText">aim</h4>
                    <p className="contentText">
                        ------------------------------------------------
                    </p>
                    <ul>
                        <li><a href="">benchmark list</a></li>
                        <li>
                            <a href="https://store.steampowered.com/app/824270/KovaaKs/">kovaaks</a>
                            <br></br>current best trainer
                        </li>
                        <li>
                            <a href="https://store.steampowered.com/app/1100990/Aimbeast/">aimbeast</a>
                            <br></br>up-and-coming best trainer
                        </li>
                        <li>
                            <a href="https://store.steampowered.com/app/714010/Aimlabs/">aimlabs</a>
                            <br></br>very bad trainer except for score system / api
                        </li>
                        <li>
                            <a href="https://github.com/helloimxtal/BallSheetOGL">ballsheetogl</a>
                            <br></br>2d vrt
                        </li>
                        <li>
                            <a href="https://aim400kg.com">aim400kg</a>
                            <br></br>browser-based 2d trainer
                        </li>

                    </ul>
                </div>
                <div className="resourcesCard">
                    <h4 className="contentText">program</h4>
                    <p className="contentText">
                        ------------------------------------------------
                    </p>
                    <ul>
                        <li>
                            <a href="https://app.hackthebox.com/">hack the box</a>
                            <br></br>interactive cybersec tutorials
                        </li>
                        <li>
                            <a href="https://learngitbranching.js.org">learn git branching</a>
                            <br></br>interactive git tutorials
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Resources;
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
                        <br></br>this is the only text editor i use for html/css/js</li>
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
                    </ul>
                </div>
                <div className="resourcesCard">
                    <h4 className="contentText">content & design inspo</h4>
                    <p className="contentText">
                        ------------------------------------------------
                    </p>
                    <ul>
                        <li><a href="/resources/site-collection">site collection (with notes)</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Resources;
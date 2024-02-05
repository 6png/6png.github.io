import React from 'react';
import './Resources.css';

const Resources = () => {
    return (
        <div className="resourcesWrapper">
            <div className="resourcesCard top">
                <img src="/images/jellyfishcute.gif"></img>
                <p className="contentText">
                    <b>credits</b>
                </p>
            </div>
            <div className="resourcesContentCards">
                <div className="resourcesCard">
                    <h4 className="contentText">tools & learning</h4>
                    <p className="contentText">
                        ------------------------------------------------
                    </p>
                    <ul>
                        <li className="contentText"><a href="https://code.visualstudio.com/">visual studio code</a></li>
                        <li className="contentText"><a href="https://theodinproject.com">the odin project</a></li>
                    </ul>
                </div>
                <div className="resourcesCard">
                    <h4 className="contentText">external content</h4>
                    <p className="contentText">
                        ------------------------------------------------
                    </p>
                    <ul>
                        <li className="contentText"><a href="">images</a></li>
                        <li className="contentText"><a href="">gifs</a></li>
                        <li className="contentText"><a href="">scripts</a></li>
                    </ul>
                </div>
            </div>
            <div className="resourcesCard top">
                <img src="/images/jellyfishcute.gif"></img>
                <p className="contentText">
                    <b>assorted bookmarks</b>
                </p>
            </div>
            <div className="resourcesContentCards">
                <div className="resourcesCard">
                    <h4 className="contentText">aim</h4>
                    <p className="contentText">
                        ------------------------------------------------
                    </p>
                    <ul>
                        <li className="contentText"><a href="">benchmark list</a></li>
                    </ul>
                </div>
                <div className="resourcesCard">
                    <h4 className="contentText">content & design inspo</h4>
                    <p className="contentText">
                        ------------------------------------------------
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Resources;